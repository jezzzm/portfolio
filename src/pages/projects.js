import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import ProjectCard from "components/ProjectCard";

const ProjectTitle = styled("h1")`
    margin-bottom: 1em;
`;

const Projects = ({ projects, meta }) => (
    <>
        <Helmet
            title={`Projects | Jez Milledge`}
            titleTemplate={`%s | Projects | Jez Milledge`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: `Projects | Jez Milledge`,
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
        <Layout>
            <ProjectTitle>Projects</ProjectTitle>
            <>
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
            </>
        </Layout>
    </>
);

export default ({ data }) => {
    const projects = data.prismic.allProjects.edges;
    const meta = data.site.siteMetadata;
    if (!projects) return null;

    return <Projects projects={projects} meta={meta} />;
};

Projects.propTypes = {
    projects: PropTypes.array.isRequired,
};

export const query = graphql`
    {
        prismic {
            allProjects(sortBy: project_post_date_DESC) {
                edges {
                    node {
                        project_title
                        project_preview_description
                        project_preview_thumbnail
                        project_category
                        project_post_date
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
    }
`;
