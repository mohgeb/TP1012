import imgImage1 from "figma:asset/22889c09014c67e7a3f7aa6ce043ac2cd5ab766e.png";

function Group() {
  return (
    <div className="absolute contents left-[30px] top-[561px]">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[114px] not-italic text-[36px] text-black text-nowrap top-[599px] whitespace-pre"> </p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[30px] not-italic text-[16px] text-black text-nowrap top-[561px] whitespace-pre">Index</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[30px] not-italic text-[10px] text-black text-nowrap top-[590px] whitespace-pre">Carousel Post: Silver Frogs Tour (Carlos, Margie, Group Photos, Volunteer Call)</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[542px] not-italic text-[10px] text-black text-nowrap top-[590px] whitespace-pre">1</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[541px] not-italic text-[10px] text-black text-nowrap top-[611px] whitespace-pre">2</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[541px] not-italic text-[10px] text-black text-nowrap top-[632px] whitespace-pre">3</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[541px] not-italic text-[10px] text-black text-nowrap top-[653px] whitespace-pre">4</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[30px] not-italic text-[10px] text-black text-nowrap top-[611px] whitespace-pre">Standalone Post: Houdini Fun Fact Series</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[31px] not-italic text-[10px] text-black text-nowrap top-[632px] whitespace-pre">Standalone Post: Donation Appeal (Chair and Flowers)</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[30px] not-italic text-[10px] text-black text-nowrap top-[653px] whitespace-pre">Standalone Post: Free Tour Invitation (Frame on the Wall)</p>
      <div className="absolute h-0 left-[30px] top-[607px] w-[518px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 518 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="518" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[30px] top-[628px] w-[518px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 518 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="518" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[30px] top-[649px] w-[518px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 518 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="518" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[30px] top-[670px] w-[518px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 518 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="518" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[31px] not-italic text-[10px] text-black text-nowrap top-[18px] whitespace-pre" data-name="Header">
      <p className="absolute left-[31px] top-[18px]">Mohamed Gebril</p>
      <p className="absolute left-[464px] top-[18px]">pt1012.mohgeb.com</p>
    </div>
  );
}

export default function A() {
  return (
    <div className="bg-white relative size-full" data-name="A4 - 1">
      <div className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[30px] not-italic text-[36px] text-black text-nowrap top-[80px] whitespace-pre">
        <p className="mb-0">Transform 1012: Social Media</p>
        <p>Presentation</p>
      </div>
      <Group />
      <Header />
      <div className="absolute bg-[#d9d9d9] h-[303px] left-0 top-[213px] w-[595px]" />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[356px] not-italic text-[10px] text-black text-nowrap top-[812px] whitespace-pre">Transform 1012: Social Media Presentation</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[30px] not-italic text-[10px] text-black text-nowrap top-[812px] whitespace-pre">1</p>
      <div className="absolute h-[338px] left-[-9px] top-[178px] w-[604px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}