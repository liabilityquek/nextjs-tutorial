// import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import qs from "qs";

const CMS_URL = "http://localhost:1337";

export async function getFeaturedReview() {
  const reviews = await getAllReviews();
  return reviews[0]; //to get the latest game review
}

export async function getReview(slug) {
  //   const text = await readFile(`./content/reviews/${slug}.md`, "utf-8");
  //   const {
  //     content,
  //     data: { title, date, image },
  //   } = matter(text);
  //   const body = marked(content, { headerIds: false, mangle: false });
  //   console.log("Front matter:", title, date, image, slug);
  const { data } = await fetchReviews({
    filters: { slug: { $eq: slug } },
    fields: ["slug", "title", "body", "subtitle", "publishedAt"],
    populate: {
      image: {
        fields: ["url"],
      },
    },
    pagination: { pageSize: 1, withCount: false },
  });
  const item = data[0];
  return {
    ...toReview(item),
    body: marked(item.attributes.body, { headerIds: false, mangle: false }),
  };
}

export async function getAllReviews() {
  // const slugs = await getSlugs()
  // const reviews = [];
  // for(const slug of slugs){
  //     const review = await getReview(slug)
  //     reviews.push(review)
  // }
  // reviews.sort((a, b) => b.date.localeCompare(a.date))
  const { data } = await fetchReviews({
    fields: ["slug", "title", "subtitle", "publishedAt"],
    populate: {
      image: {
        fields: ["url"],
      },
    },
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 30 },
  });

  return data.map(toReview);
}

export async function getSlugs() {
  //   const files = await readdir("./content/reviews");
  // //   console.log(`files in reviews.js: ${files}`);
  //   return files
  //     .filter((file) => file.endsWith(".md"))
  //     .map((file) => file.slice(0, -".md".length));
  const { data } = await fetchReviews({
    fields: ["slug"],
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 100 },
  });
  return data.map((item) => item.attributes.slug);
}

async function fetchReviews(parameters) {
  const url =
    `${CMS_URL}/api/reviews?` +
    qs.stringify(parameters, {
      encodeValuesOnly: true,
    });

  //   console.log("fetchReviews:", url);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  return response.json();
}

function toReview(item) {
  const { attributes } = item;
  return {
    slug: attributes.slug,
    title: attributes.title,
    date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
    image: CMS_URL + attributes.image.data.attributes.url,
  };
}
