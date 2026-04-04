export default function Footer() {
  return (
    <footer className="relative bg-obsidian-950 border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          {/* Brand */}
          <div>
            <p className="font-cormorant text-2xl text-ivory/80 mb-1">Kallery Galleria</p>
            <p className="label opacity-30">Puthenthodu, Karuvannur · Irinjalakuda · Thrissur</p>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-2 text-right">
            <a href="tel:+919495040824" className="font-cormorant text-xl text-gold/80 hover:text-gold transition-colors">
             +919048480370
            </a>
            <a href="tel:+918289830824" className="font-cormorant text-xl text-ivory/30 hover:text-ivory/60 transition-colors">
              +91 82898 30824
            </a>
          </div>
        </div>

        <div className="gold-line my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="label opacity-20">
            Premium commercial property · Available for lease & sale
          </p>
          <p className="label opacity-15">
            © {new Date().getFullYear()} Kallery Galleria
          </p>
        </div>
      </div>
    </footer>
  );
}
