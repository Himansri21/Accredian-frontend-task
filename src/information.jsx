import Posts from "./InformationPosts" 

  export default function Information() {
    return (
      <div className="bg-gray-200 p-24 mb-24">
        <div className="text-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 flex rounded-xl p-6">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How Do I </h2>
            <h2 className="text-center text-3xl mx-4 font-bold tracking-tight text-blue-900 sm:text-4xl">REFER ?</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 border-t border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-3 rounded-md shadow-xl p-6">
              {Posts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between rounded-2xl shadow-lg">
                  <div className="flex items-center gap-x-4 text-xs">
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    )
  }
//w-24 h-24 rounded-full bg-blue-500 shadow-lg
