export default function Tab({ title, onClick, activeTab }) {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={onClick}
        className={`text-sm-h4 xl:text-lg-h4 md:text-md-h4 hover:text-tertiary transition-all duration-200 font-semibold  hover:border-tertiary w-auto ${
          activeTab === title
            ? "text-tertiary border-b-2 border-tertiary"
            : "text-black border-b-2 border-primary"
        }`}
      >
        {title}
      </button>
    </div>
  );
}
