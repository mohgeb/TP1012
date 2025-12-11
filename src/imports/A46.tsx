function Header() {
  return (
    <div className="absolute contents font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[31px] not-italic text-[10px] text-black text-nowrap top-[18px] whitespace-pre" data-name="Header">
      <p className="absolute left-[31px] top-[18px]">Mohamed Gebril</p>
      <p className="absolute left-[464px] top-[18px]">pt1012.mohgeb.com</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[40px] left-[577px] top-[401px] w-[10px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 40">
        <g id="Group 14">
          <circle cx="5" cy="5" fill="var(--fill-0, black)" id="Ellipse 1" r="5" transform="matrix(-1 0 0 1 10 0)" />
          <circle cx="5" cy="5" fill="var(--fill-0, black)" id="Ellipse 2" r="5" transform="matrix(-1 0 0 1 10 15)" />
          <circle cx="5" cy="5" fill="var(--fill-0, black)" id="Ellipse 3" r="5" transform="matrix(-1 0 0 1 10 30)" />
        </g>
      </svg>
    </div>
  );
}

export default function A() {
  return (
    <div className="bg-white relative size-full" data-name="A4 - 6">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[550px] not-italic text-[10px] text-black text-nowrap top-[812px] whitespace-pre">Fin</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[30px] not-italic text-[10px] text-black text-nowrap top-[812px] whitespace-pre">6</p>
      <Header />
      <Group />
      <p className="absolute font-['Inter:Thin',sans-serif] font-thin h-[71px] leading-[normal] left-[37px] not-italic text-[10px] text-black top-[553px] w-[528px]">Disclaimer: The information, design renderings, historical facts, and funding projections presented in this document represent the current vision and development plan for the Transform 1012 project, also known as the Fred Rouse Center for Arts and Community Healing. Please be advised that all projected timelines, design elements, and financial needs are forward-looking statements and are subject to change based on securing necessary funding, construction realities, and final governmental or historical review board approvals. We are committed to historical accuracy and ethical context in our mission of reparative justice.</p>
      <p className="absolute font-['Inter:Thin',sans-serif] font-thin leading-[normal] left-[231px] not-italic text-[10px] text-black text-nowrap top-[451px] whitespace-pre">
        <span>{`Prepared By `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold">Mohamed Gebril</span>
      </p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[263px] not-italic text-[10px] text-black text-nowrap top-[379px] whitespace-pre">Transform 1012</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[72px] not-italic text-[25px] text-black text-nowrap top-[406px] whitespace-pre">Thank You for Your Time and Interest</p>
    </div>
  );
}