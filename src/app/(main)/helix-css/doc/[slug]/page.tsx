import { getDocBySlug, getAllDocs } from '@lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

// Esta função gera rotas estáticas para cada arquivo MDX durante o build
export async function generateStaticParams() {
  const docs = await getAllDocs();
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DocPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const doc = await getDocBySlug(slug);
  
  if (!doc) {
    notFound();
  }

  return (
    <article className="prose max-w-3xl mx-auto py-8">
      <h1>{doc.metadata.title}</h1>
      {doc.metadata.description && (
        <p className="text-xl text-gray-500">{doc.metadata.description}</p>
      )}
      <hr className="my-4" />
      <MDXRemote source={doc.content} />
    </article>
  );
}
