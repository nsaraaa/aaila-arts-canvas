import { Link, useLocation } from "react-router-dom";

const ImageViewer = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const src = params.get("src") || "";
  const title = params.get("title") || "Artwork";
  const description = params.get("desc") || "";

  return (
    <div className="min-h-screen bg-gradient-to-b from-arts-light-blue/5 via-white to-arts-pink/5 flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-arts-light-blue hover:text-arts-dark-blue transition-colors duration-300"
          >
            <span className="text-sm font-body">Close</span>
          </Link>

          <div className="text-sm font-body text-arts-dark-blue/70">{title}</div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-[1200px] w-full h-full flex items-center justify-center">
          <div className="creative-card p-6 w-full h-full flex flex-col items-center justify-center">
            {src ? (
              // Use img with object-contain so it displays full within the viewport
              <img
                src={src}
                alt={title}
                className="max-w-full max-h-[80vh] object-contain rounded-md shadow-md"
              />
            ) : (
              <div className="text-center text-arts-dark-blue/70">No image specified.</div>
            )}

            {/* Aesthetic caption underneath the image */}
            {description && src && (
              <div className="mt-6 w-full flex justify-center">
                <div className="max-w-3xl bg-gradient-to-br from-white/60 to-arts-light-blue/5 backdrop-blur-md p-4 rounded-2xl text-center">
                  <div className="text-sm font-body text-arts-dark-blue/80 italic leading-relaxed">{description}</div>
                  <div className="mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-arts-light-blue to-arts-pink rounded-full opacity-80"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
