interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;

}

export default function Cards({ imageSrc, title, description}: FeatureCardProps) {
  return (
    <div className="relative rounded-xl border border-transparent p-[1px] bg-gray-900 bg-origin-border overflow-hidden
                transition-transform duration-300 hover:scale-[0.98] hover:shadow-inner">
  
  {/* Inner content */}
  <div style={{ backgroundColor: "rgba(9, 9, 11)" }} className="rounded-xl p-6 flex flex-col items-center w-full h-full">
    
    {/* Image */}
    <img src={imageSrc} alt={title} className="w-100 h-100 mb-4 object-contain" />
    
    {/* Text + Button */}
    <div className="w-full text-left space-y-4">
      <h3 className="text-white font-normal text-2xl">{title}</h3>
      <p className="text-gray-400 text-l">{description}</p>
     
    </div>
    
  </div>
  
</div>

  );
}
