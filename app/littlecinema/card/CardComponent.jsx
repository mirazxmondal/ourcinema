const CardComponent = () => {
  return (
    <div className="mt-5 flex flex-col justify-center items-center">
      <div className="max-w-[70%] flex space-x-5 ">
        <div className="h-[342px] w-[400px] border border-black rounded-2xl">
          <div className="">title</div>
        </div>
        <div className="h-[342px] w-[200px] border border-black rounded-2xl"></div>
      </div>
      <div className="w-[620px] h-52 border border-black mt-5 rounded-2xl">
        <div></div>
      </div>
      <div className="mt-5 flex space-x-5">
        <div className="h-[354px] w-[240px] rounded-2xl border border-black"></div>
        <div className="space-y-3">
          <div className="h-[171px] w-[360px] border rounded-2xl border-black"></div>
          <div className="h-[171px] w-[360px] rounded-2xl border border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
