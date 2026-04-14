export default function Footer() {
  return (
    <footer className="bg-[#1C1714] text-[#F5F2ED] px-6 py-[100px]">

      <div className="max-w-[1200px] mx-auto">

        {/* ================= BRAND (BESAR) ================= */}
        <div className="mb-6 md:mb-10">
          <img
            src="https://res.cloudinary.com/dombq6plz/image/upload/v1776050011/SERENITY_LOGO-02_u1bcf2.png"
            alt="Serenity"
            className="h-[90px] md:h-[130px] w-auto object-contain"
          />
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-[14px]">

          <div className="space-y-3">
            <p className="text-[#F5F2ED]/40 uppercase text-[11px] tracking-[0.2em]">
              Explore
            </p>
            <p className="hover:text-white transition cursor-pointer">Destinations</p>
            <p className="hover:text-white transition cursor-pointer">Experience</p>
            <p className="hover:text-white transition cursor-pointer">Yacht</p>
          </div>

          <div className="space-y-3">
            <p className="text-[#F5F2ED]/40 uppercase text-[11px] tracking-[0.2em]">
              Company
            </p>
            <p className="hover:text-white transition cursor-pointer">About</p>
            <p className="hover:text-white transition cursor-pointer">Contact</p>
          </div>

          <div className="space-y-3">
            <p className="text-[#F5F2ED]/40 uppercase text-[11px] tracking-[0.2em]">
              Contact
            </p>
            <p className="text-[#F5F2ED]/80">hello@serenity-yachts.com</p>
            <p className="text-[#F5F2ED]/60">Indonesia</p>
          </div>

          <div className="space-y-3">
            <p className="text-[#F5F2ED]/40 uppercase text-[11px] tracking-[0.2em]">
              Legal
            </p>
            <p className="hover:text-white transition cursor-pointer">Privacy</p>
            <p className="hover:text-white transition cursor-pointer">Terms</p>
          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-16 border-t border-[#F5F2ED]/10" />

        {/* ================= BOTTOM ================= */}
        <div className="mt-6 text-[12px] text-[#F5F2ED]/40 flex justify-between items-center">
          <p>© {new Date().getFullYear()} Serenity</p>
          <p>All rights reserved.</p>
        </div>

      </div>

    </footer>
  );
}