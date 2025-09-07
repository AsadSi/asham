const Instagram = () => {
  // Mock Instagram posts data
  const posts = [
    {
      id: 1,
      image: "/images/instagram/post1.jpg",
      likes: 234,
      comments: 12,
      caption: "Spændende møde med vælgerne i Nørrebro 🌟 #København #Politik"
    },
    {
      id: 2,
      image: "/images/instagram/post2.jpg",
      likes: 189,
      comments: 8,
      caption: "Klimademonstration for en grønnere fremtid 🌱 #Klima #Miljø"
    },
    {
      id: 3,
      image: "/images/instagram/post3.jpg",
      likes: 312,
      comments: 15,
      caption: "Podcast optagelse med spændende gæster 🎙️ #GadensParlament"
    },
    {
      id: 4,
      image: "/images/instagram/post4.jpg",
      likes: 156,
      comments: 6,
      caption: "Møde med unge i DYIA projektet 👥 #Ungdom #Fællesskab"
    }
  ];

  return (
    <section id="instagram" className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium mb-8 shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C8.396 0 7.609.043 6.298.099 4.987.155 4.042.283 3.24.52c-.873.265-1.615.607-2.357 1.349S.265 3.127.001 4c-.283.802-.415 1.747-.47 3.058C-.043 8.391 0 9.178 0 12.817s.043 4.426.056 5.737c.055 1.311.187 2.256.47 3.058.265.873.607 1.615 1.349 2.357s1.484 1.084 2.357 1.349c.802.283 1.747.415 3.058.47 1.311.055 2.098.098 5.737.098s4.426-.043 5.737-.098c1.311-.055 2.256-.187 3.058-.47.873-.265 1.615-.607 2.357-1.349s1.084-1.484 1.349-2.357c.283-.802.415-1.747.47-3.058.055-1.311.098-2.098.098-5.737s-.043-4.426-.098-5.737c-.055-1.311-.187-2.256-.47-3.058-.265-.873-.607-1.615-1.349-2.357S20.873.265 20 .001C19.198-.283 18.253-.415 17.042-.47 15.731-.043 14.944 0 11.323 0h-.733c.609 0 .609 0 .609 0zM9.927 2.205c.609 0 1.311.043 2.098.098 1.747.109 2.256.327 2.792.654.873.436 1.484.873 2.091 1.484.436.436.873 1.047 1.047 1.92.327.609.545 1.118.654 2.865.109 1.747.109 2.256.109 3.328s0 1.581-.109 3.328c-.109 1.747-.327 2.256-.654 2.865-.174.873-.611 1.484-1.047 1.92-.607.611-1.218 1.047-2.091 1.484-.536.327-1.045.545-2.792.654-1.747.109-2.256.109-3.328.109s-1.581 0-3.328-.109c-1.747-.109-2.256-.327-2.792-.654-.873-.437-1.484-.873-2.091-1.484-.436-.436-.873-1.047-1.047-1.92-.327-.609-.545-1.118-.654-2.865C2.205 14.944 2.162 14.435 2.162 13.363s0-1.581.109-3.328c.109-1.747.327-2.256.654-2.865.174-.873.611-1.484 1.047-1.92.607-.611 1.218-1.047 2.091-1.484.536-.327 1.045-.545 2.792-.654 1.747-.109 2.256-.109 3.328-.109zM12.017 6.829a5.188 5.188 0 100 10.376 5.188 5.188 0 000-10.376zm0 8.547a3.359 3.359 0 110-6.718 3.359 3.359 0 010 6.718zm5.767-8.84a1.209 1.209 0 11-2.418 0 1.209 1.209 0 012.418 0z"/>
            </svg>
            <span>Følg Min Kampagne</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Seneste Fra <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Instagram</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Følg med i min politiske rejse og kampagneaktiviteter på sociale medier
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100"
            >
              {/* Mock image placeholder */}
              <div className="aspect-square bg-gradient-to-br from-pink-200 via-rose-200 to-purple-200 flex items-center justify-center relative overflow-hidden">
                <svg className="w-16 h-16 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.609.043 6.298.099 4.987.155 4.042.283 3.24.52c-.873.265-1.615.607-2.357 1.349S.265 3.127.001 4c-.283.802-.415 1.747-.47 3.058C-.043 8.391 0 9.178 0 12.817s.043 4.426.056 5.737c.055 1.311.187 2.256.47 3.058.265.873.607 1.615 1.349 2.357s1.484 1.084 2.357 1.349c.802.283 1.747.415 3.058.47 1.311.055 2.098.098 5.737.098s4.426-.043 5.737-.098c1.311-.055 2.256-.187 3.058-.47.873-.265 1.615-.607 2.357-1.349s1.084-1.484 1.349-2.357c.283-.802.415-1.747.47-3.058.055-1.311.098-2.098.098-5.737s-.043-4.426-.098-5.737c-.055-1.311-.187-2.256-.47-3.058-.265-.873-.607-1.615-1.349-2.357S20.873.265 20 .001C19.198-.283 18.253-.415 17.042-.47 15.731-.043 14.944 0 11.323 0h-.733c.609 0 .609 0 .609 0zM9.927 2.205c.609 0 1.311.043 2.098.098 1.747.109 2.256.327 2.792.654.873.436 1.484.873 2.091 1.484.436.436.873 1.047 1.047 1.92.327.609.545 1.118.654 2.865.109 1.747.109 2.256.109 3.328s0 1.581-.109 3.328c-.109 1.747-.327 2.256-.654 2.865-.174.873-.611 1.484-1.047 1.92-.607.611-1.218 1.047-2.091 1.484-.536.327-1.045.545-2.792.654-1.747.109-2.256.109-3.328.109s-1.581 0-3.328-.109c-1.747-.109-2.256-.327-2.792-.654-.873-.437-1.484-.873-2.091-1.484-.436-.436-.873-1.047-1.047-1.92-.327-.609-.545-1.118-.654-2.865C2.205 14.944 2.162 14.435 2.162 13.363s0-1.581.109-3.328c.109-1.747.327-2.256.654-2.865.174-.873.611-1.484 1.047-1.92.607-.611 1.218-1.047 2.091-1.484.536-.327 1.045-.545 2.792-.654 1.747-.109 2.256-.109 3.328-.109zM12.017 6.829a5.188 5.188 0 100 10.376 5.188 5.188 0 000-10.376zm0 8.547a3.359 3.359 0 110-6.718 3.359 3.359 0 010 6.718zm5.767-8.84a1.209 1.209 0 11-2.418 0 1.209 1.209 0 012.418 0z"/>
                </svg>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Post info */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                  <span className="flex items-center gap-1">
                    <span className="text-red-500">❤️</span>
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-blue-500">💬</span>
                    {post.comments}
                  </span>
                </div>
                <p className="text-slate-700 leading-relaxed line-clamp-3 group-hover:text-slate-900 transition-colors">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Følg På Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Instagram;