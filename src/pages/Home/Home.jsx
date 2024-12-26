import React from "react";

import FeatureCard from "../../components/FeatureCard/FeatureCard";
import StatCard from "../../components/StatCard/StatCard";
import Card from "../../components/Card/Card";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

import styles from "./Home.module.css";

const features = [
  {
    title: "Our Mission",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nequeeveniet voluptatem, repudiandae assumenda reprehenderit ad.",
  },
  {
    title: "Our Vision",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nequeeveniet voluptatem, repudiandae assumenda reprehenderit ad.",
  },
  {
    title: "Our Target",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nequeeveniet voluptatem, repudiandae assumenda reprehenderit ad.",
  },
  {
    title: "Our Journey",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nequeeveniet voluptatem, repudiandae assumenda reprehenderit ad.",
  },
];
const stats = [
  { value: "10000+", label: "Students" },
  { value: "100+", label: "Instructors" },
  { value: "10000+", label: "Hours" },
  { value: "4.4", label: "Rating" },
];
const courses = [
  {
    name: "Course Name",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cupiditate deleniti error hic sed, provident expedita quis molestiae consequuntur porro.",
    url: "/1",
  },
  {
    name: "Course Name",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cupiditate deleniti error hic sed, provident expedita quis molestiae consequuntur porro.",
    url: "/2",
  },
];
const articles = [
  {
    title: "Article Name",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cupiditate deleniti error hic sed, provident expedita quis molestiae consequuntur porro.",
    url: "/1",
  },
  {
    title: "Article Name",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cupiditate deleniti error hic sed, provident expedita quis molestiae consequuntur porro.",
    url: "/2",
  },
  {
    title: "Article Name",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cupiditate deleniti error hic sed, provident expedita quis molestiae consequuntur porro.",
    url: "/article-url",
  },
];

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.heroSection}>
        <h1>Welcome To Our Community!</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quod
          unde velit facilis delectus molestias, impedit officiis ea quia
          incidunt!
        </p>
        <button className={styles.learnMoreButton}>Learn More</button>
      </div>

      <div className={styles.featuresSection}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className={styles.overviewSection}>
        <div>
          <h2>Overview</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quis
            rerum quaerat adipisci repellat debitis neque in, natus sapiente
            blanditiis optio unde, dolore eligendi! Fugit molestias ea ad enim,
            culpa ut earum, impedit rerum consequatur eius quaerat hic esse
            repudiandae sunt dolore neque dolores. Quod laboriosam dicta unde
            sint, odit, pariatur sunt esse ex natus consectetur rerum id dolorum
            voluptatum veritatis saepe, iusto totam cumque earum vel perferendis
            voluptate cum.
          </p>
        </div>
        <div className={styles.imageContainer}></div>
      </div>

      <div className={styles.statsContainer}>
        {stats.map((stat, index) => (
          <StatCard key={index} value={stat.value} label={stat.label} />
        ))}
      </div>

      <div className={styles.coursesSection}>
        <SectionHeading heading={"Our Courses"} url={"/courses"} />
        <div className={styles.coursesContainer}>
          {courses.map((course, index) => (
            <Card
              key={index}
              name={course.name}
              description={course.description}
              url={course.url}
            />
          ))}
        </div>
      </div>

      <div className={styles.newsArticlesSection}>
        <SectionHeading heading="News & Articles" url="/news-articles" />
        <div className={styles.articlesContainer}>
          {articles.map((article, index) => (
            <Card
              key={index}
              name={article.name}
              description={article.description}
              url={article.url}
            />
          ))}
        </div>
      </div>

      <div className={styles.customerReviewsSection}>
        <SectionHeading heading="Customer Reviews" url="/customer-reviews" />
        <div className={styles.review}>
          <div className={styles.profile}></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            eaque tempora sequi optio, assumenda nesciunt accusamus dicta at
            cupiditate eum?
          </p>
        </div>
        <h2>We Collaborate With</h2>
        <div className={styles.companiesContainer}>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className={styles.company}></div>
          ))}
        </div>
      </div>

      <div className={styles.newsletterSection}>
        <h2>Join Our Mailing List!</h2>
        <form>
          <input type="email" placeholder="Your Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className={styles.letUsHelpSection}>
        <section>
          <h2>Let Us Help!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo
            voluptate maiores culpa repellat. Excepturi veniam saepe odio. In
            adipisci similique asperiores beatae corporis ad odio sit pariatur
            nobis, perspiciatis perferendis ducimus possimus reprehenderit!
          </p>
          {[1, 2, 3].map((_, index) => (
            <span key={index}>
              <div className={styles.icon}></div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              sint.
            </span>
          ))}
        </section>
        <div className={styles.image}></div>
      </div>
    </div>
  );
};

export default Home;
