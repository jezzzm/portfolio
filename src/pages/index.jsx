import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { RichText } from "prismic-reactjs";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Button from "components/_ui/Button";
import About from "components/About";
import Layout from "components/Layout";
import ProjectCard from "components/ProjectCard";
import Icons from "components/Icons";

const Hero = styled("div")`
  padding-top: 2.5em;
  padding-bottom: 3em;
  margin-bottom: 6em;
  max-width: 830px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 3em;
  }

  h1 {
    margin-bottom: 1em;

    a {
      text-decoration: none;
      transition: all 100ms ease-in-out;
      }
    }
  }
`;

const Section = styled("section")`
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  i {
    display: inline;
    line-height: 1.5;
    font-size: 60px;
  }
`;

const ProjectAction = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;
  margin-left: auto;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin: 0 auto;
  }

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }

  &:hover {
    color: ${colors.blue500};
    transition: all 150ms ease-in-out;

    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`;

const ProfilePic = styled.img`
  max-width: 100%;
  width: 300px;
`;

const RenderBody = ({ home, projects, meta, icon }) => (
  <>
    <Helmet
      title={meta.title}
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: meta.title,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: icon,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: meta.title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />
    <Hero>
      <ProfilePic src={home.profile_pic.url} alt="Pic of Jez" />

      <>{RichText.render(home.hero_title)}</>
      <Link to="#about">
        <Button>{RichText.render(home.hero_button_text)}</Button>
      </Link>
    </Hero>
    <h2>Recent Projects</h2>
    <Section>
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          category={project.node.project_category}
          title={project.node.project_title}
          description={project.node.project_preview_description}
          thumbnail={project.node.project_preview_thumbnail}
          uid={project.node._meta.uid}
          demo={project.node.project_demo}
          repo={project.node.project_repo}
        />
      ))}
      <ProjectAction to={"/projects"}>
        See more projects <span>&#8594;</span>
      </ProjectAction>
    </Section>
    <Section id="about">
      {RichText.render(home.about_title)}
      <About bio={home.about_bio} socialLinks={home.about_links} />
    </Section>
    <Icons />
  </>
);

export default ({ data }) => {
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop();
  const projects = data.prismic.allProjects.edges;
  const meta = data.site.siteMetadata;
  const icon = data.file.publicURL;

  if (!doc || !projects) return null;

  return (
    <Layout>
      <RenderBody home={doc.node} projects={projects} meta={meta} icon={icon} />
    </Layout>
  );
};

RenderBody.propTypes = {
  home: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
};

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            hero_title
            hero_button_text
            hero_button_link {
              ... on PRISMIC__ExternalLink {
                _linkType
                url
              }
            }
            content
            about_title
            about_bio
            profile_pic
            about_links {
              about_link
            }
          }
        }
      }
      allProjects(first: 3, sortBy: project_post_date_DESC) {
        edges {
          node {
            project_title
            project_preview_description
            project_preview_thumbnail
            project_category
            project_post_date
            project_demo {
              __typename
              ... on PRISMIC__ExternalLink {
                url
              }
            }
            project_repo {
              __typename
              ... on PRISMIC__ExternalLink {
                url
              }
            }
            _meta {
              uid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    file(relativePath: { eq: "icon300.png" }) {
      publicURL
    }
  }
`;
