export default function Footer() {
  return (
    <footer className="bg-[#ECEDE9] text-[#2D3C68] px-6 py-[100px]">

      <div className="max-w-[1200px] mx-auto">

        {/* ================= BRAND ================= */}
        <div className="mb-10">
          <img
            src="https://res.cloudinary.com/dombq6plz/image/upload/v1776049756/SERENITY_LOGO-01_s111xy.png"
            alt="Serenity"
            className="h-[90px] md:h-[120px] w-auto object-contain opacity-90"
          />
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-[14px]">

          <div className="space-y-3">
            <p className="text-[#2D3C68]/50 uppercase text-[11px] tracking-[0.2em]">
              Explore
            </p>
            <p className="opacity-80 hover:opacity-100 transition cursor-pointer">Destinations</p>
            <p className="opacity-80 hover:opacity-100 transition cursor-pointer">Experience</p>
            <p className="opacity-80 hover:opacity-100 transition cursor-pointer">Yacht</p>
          </div>

          <div className="space-y-3">
            <p className="text-[#2D3C68]/50 uppercase text-[11px] tracking-[0.2em]">
              Company
            </p>
            <p className="opacity-80 hover:opacity-100 transition cursor-pointer">About</p>
            <p className="opacity-80 hover:opacity-100 transition cursor-pointer">Contact</p>
          </div>

          <div className="space-y-3">
            <p className="text-[#2D3C68]/50 uppercase text-[11px] tracking-[0.2em]">
              Contact
            </p>
            <p className="opacity-80">hello@serenity-yachts.com</p>
            <p className="opacity-60">Indonesia</p>
          </div>

          <div className="space-y-3">
            <p className="text-[#2D3C68]/50 uppercase text-[11px] tracking-[0.2em]">
              Legal
            </p>
            <p className="opacity-80 hover:opacity-100 transition cursor-pointer">Privacy</p>
            <p className="opacity-80 hover:opacity-100 transition cursor-pointer">Terms</p>
          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-16 border-t border-[#2D3C68]/10" />

        {/* ================= BOTTOM ================= */}
        <div className="mt-6 text-[12px] text-[#2D3C68]/40 flex justify-between items-center">
          <p>© {new Date().getFullYear()} Serenity</p>
          <p>All rights reserved.</p>
        </div>

      </div>

    </footer>
  );
}