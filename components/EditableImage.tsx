import React, { useState, useEffect, DragEvent, useRef, ChangeEvent } from 'react';
import { Camera } from 'lucide-react';

interface EditableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  storageKey: string;
  wrapperClassName?: string;
}

const EditableImage: React.FC<EditableImageProps> = ({ storageKey, src: defaultSrc, className, wrapperClassName = "w-full h-full", alt, ...props }) => {
  const [src, setSrc] = useState(defaultSrc);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // If defaultSrc changes (e.g. route change), reset or load saved override
    try {
        const saved = localStorage.getItem(`img_${storageKey}`);
        if (saved) {
            setSrc(saved);
        } else {
            setSrc(defaultSrc);
        }
    } catch (e) {
        setSrc(defaultSrc);
    }
  }, [storageKey, defaultSrc]);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    processFile(file);
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const result = ev.target?.result as string;
        setSrc(result);
        try { 
            localStorage.setItem(`img_${storageKey}`, result); 
        } catch(e) {
            console.warn("Storage quota exceeded or error", e);
            alert("Image is too large to save permanently, but it will display for this session.");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent bubbling if image is wrapped in a Link
    fileInputRef.current?.click();
  };

  return (
    <div 
        className={`relative ${wrapperClassName} group/edit ${isDragging ? 'ring-4 ring-brand-brown ring-inset' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
    >
      <img src={src} alt={alt} className={className} {...props} />
      
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileSelect} 
        className="hidden" 
        accept="image/*"
      />

      {/* Edit Button - Always visible on mobile/touch (opacity-100), hidden by default on desktop (lg:opacity-0) until hover */}
      <button 
        onClick={triggerUpload}
        className="absolute top-4 right-4 bg-black/60 hover:bg-brand-brown hover:text-brand-black text-white p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all opacity-100 lg:opacity-0 lg:group-hover/edit:opacity-100 z-20 shadow-xl cursor-pointer"
        title="Change Image"
        type="button"
        aria-label="Upload new image"
      >
        <Camera size={20} />
      </button>
      
      {isDragging && (
        <div className="absolute inset-0 bg-brand-brown/20 flex items-center justify-center pointer-events-none z-20 backdrop-blur-[2px]">
            <span className="bg-brand-black text-brand-brown font-black uppercase tracking-widest px-6 py-3 rounded shadow-2xl border-2 border-brand-brown animate-bounce">
                Drop to Upload
            </span>
        </div>
      )}
    </div>
  );
};

export default EditableImage;