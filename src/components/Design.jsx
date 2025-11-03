import Pattern from "@/components/pattern"

export default function Design(){
    const handleScroll = () => {
      // custom smooth scroll with easing so we can control duration
      const start = window.scrollY; 
      const target = document.body.scrollHeight;
      const distance = target - start;
      const duration = 5000; // milliseconds (make this larger to slow the animation)
      let startTime = null;

      // easeInOutQuad easing
      const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = ease(progress);
        window.scrollTo(0, Math.round(start + distance * eased));
        if (elapsed < duration) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    };
    return(
        <div className="flex flex-col mb-300">
            {/* for my name add some font*/}
            <div className="text-center mb-30" onClick={handleScroll} >
                <b className="text-5xl">Shashwat Jain</b>
            </div>
        
            {/* for some drawing or some shit */}
            <div className="w-full h-fit flex justify-end">
              <div className="w-[60%]">
                <Pattern />
              </div>
            </div>
        </div>
    )
}