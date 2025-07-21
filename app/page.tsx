export default function Home() {
  return (
    <main className="mx-auto max-w-4xl flex flex-col items-center text-center px-6 py-4 md:py-12 gap-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
        Welcome to My Blog
      </h1>

      <h2 className="text-lg md:text-xl font-medium text-gray-700">
        Here, ideas find a voice and words build bridges.
      </h2>

      <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mt-4 space-y-3">
        <p>
          Whether you&apos;re into
          <span className="font-semibold "> tech</span>,
          <span className="font-semibold "> travel</span>,
          <span className="font-semibold "> creativity</span>, or
          <span className="font-semibold "> personal growth</span>, this blog is
          a space for curious minds and open hearts.
        </p>
        <p>
          Dive into honest stories, helpful insights, and thoughtful
          reflections— all written with care and a spark of originality.
        </p>
        <p>Let’s explore what matters, one post at a time.</p>
      </div>
    </main>
  );
}
