import Image from 'next/image';
import Link from 'next/link';

import AuthorCard from '@/components/AuthorCard';
import { CategoryList, HomeHero, Invitation } from '@/components/blocks';
import { Button } from '@/components/UI';
import { authors } from '@/constants';
import {
  authorsAvatars,
  controlsIcons,
  images,
  logos,
} from '@/constants/images';
import { Post } from '@/types';

import './styles/page.scss';

const { post1, reason } = images;

const post: Post = {
  author: 'John Deo',
  date: new Date(2021, 7, 23),
  title: '8 Figma design systems that you can download for free today.',
};

const posts = [post, post, post, post];

export default function Home() {
  return (
    <div className="home flex column">
      <HomeHero />
      <section className="posts flex">
        <div className="selected-post">
          <h2>Featured Post</h2>
          <div className="selected-post-body flex column">
            <Image src={post1} alt="Post" />
            <div className="selected-post-info flex column">
              <div>
                <span className="w500">
                  By <span className="colored">John Doe</span> | May 23, 2022
                </span>
              </div>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
            <Button styleType="colored">Read More &gt;</Button>
          </div>
        </div>
        <div className="all-posts flex column">
          <div className="all-posts-heading flex center">
            <h2>All Posts</h2>
            <div>
              <span className="colored">View All</span>
            </div>
          </div>
          <ul className="post-list flex column">
            {posts.map(({ author, date, title }, index) => (
              <li key={index} className="post-list-item flex column">
                <div className="w500">
                  By <span className="colored">{author}</span> |{' '}
                  {date.toLocaleString()}
                </div>
                <h4>{title}</h4>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mission">
        <div className="top flex">
          <div className="middle"></div>
          <div className="end"></div>
        </div>
        <div className="mission-body flex">
          <div className="mission-item">
            <div className="cap">
              <span className="w600">ABOUT US</span>
            </div>
            <div className="mission-item-body flex">
              <h2>
                We are a community of content writers who share their learnings
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href={'#'} className="colored w700">
                Read More &gt;
              </Link>
            </div>
          </div>
          <div className="mission-item">
            <div className="cap">
              <span className="w600">Our mision</span>
            </div>
            <div className="mission-item-body">
              <h3>
                Creating valuable content for creatives all around the world
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CategoryList title="Choose a category" />
      <section className="reason">
        <div className="image-container">
          <Image src={reason} alt="Why we started" />
        </div>
        <div className="message">
          <div className="message-body">
            <div className="cap">
              <span className="w600">WHY WE STARTED</span>
            </div>
            <h1>
              It started out as a simple idea and evolved into our passion
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <Button styleType="colored">Discover our story &gt;</Button>
          </div>
        </div>
      </section>
      <section className="authors">
        <h2>List of Authors</h2>
        <div className="flex">
          {authors.map(({ name, photo, position }) => (
            <AuthorCard
              key={name}
              name={name}
              photo={photo}
              position={position}
            />
          ))}
        </div>
      </section>
      <section className={'sponsors'}>
        <div>
          <span>We are</span>
          <h4>Featured in</h4>
        </div>
        {logos.map((logo, index) => (
          <Image key={index} src={logo} alt={`logo${index + 1}`} />
        ))}
      </section>

      <section className="testimonials">
        <div className="description">
          <div className="cap">
            <span className="w600">Testimonials</span>
          </div>
          <h2>What people say about our blog</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className="delimiter-container">
          <div className="delimiter"></div>
        </div>
        <div className="corousel">
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
          <div className="bottom">
            <div className="user">
              <Image src={authorsAvatars.jonathan} alt="jonathan" />
              <div className="user-info">
                <h4>Jonathan Vallem</h4>
                <p>New york, USA</p>
              </div>
            </div>

            <div className="controls">
              <div className="arrow">
                <Image src={controlsIcons.leftArrow} alt="Left arrow" />
              </div>
              <div className="arrow active">
                <Image src={controlsIcons.rightArrow} alt="Right arrow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Invitation />
    </div>
  );
}
