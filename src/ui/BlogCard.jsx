import Blog from "/blog-wallet.jpeg";
export default function BlogCard() {
  return (
    <div className="relative w-[425px] max-w-[70%] bg-contain">
      <img src={Blog} alt="blog" className=" w-full h-full" />
      <div className="absolute left-0 top-[70%] w-[40%] py-4 bg-slate-400 backdrop-blur-lg backdrop:blur">
        <p className="ml-3 text-body-sm md:text-body-md lg:text-body-lg font-semibold">
          New Wallet
        </p>
      </div>
    </div>
  );
}
