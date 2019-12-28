import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "@emotion/styled";
import colors from "styles/colors";
import { Link, graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import Button from "components/_ui/Button";
import Layout from "components/Layout";

const ProjectHeroContainer = styled("div")`
    background: ${colors.grey200};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
    padding-top: 2.25em;
    margin: 3.5em 0;

    img {
        max-width: 600px;
    }
`;

const ProjectCategory = styled.div`
    max-width: 550px;
    margin: 0 auto;
    text-align: center;
    font-weight: 600;
    color: ${colors.grey600};

    h5 {
        margin-top: 0;
        margin-bottom: 1em;
    }
`;

const ProjectTitle = styled("div")`
    max-width: 550px;
    margin: 0 auto;
    text-align: center;

    h1 {
        margin-top: 0;
    }
`;

const ProjectBody = styled("div")`
    max-width: 550px;
    margin: 0 auto;

    .block-img {
        margin-top: 3.5em;
        margin-bottom: 0.5em;

        img {
            width: 100%;
        }
    }
`;

const ProjectLink = styled(Link)`
    margin-top: 3em;
    display: block;
    text-align: center;
`;

const ProjectExternalLink = styled("a")`
    margin-top: 1em;
    display: inline-block;
    text-align: center;
    &:first-of-type {
        margin-right: 0.5em;
    }
`;

const Project = ({ project, meta }) => {
    return (
        <>
            <Helmet
                title={`${project.project_title[0].text} | Jez Milledge`}
                titleTemplate={`%s | ${meta.title}`}
                meta={[
                    {
                        name: `description`,
                        content: meta.description,
                    },
                    {
                        property: `og:title`,
                        content: `${project.project_title[0].text} | Jez Milledge`,
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
                <ProjectCategory>
                    {RichText.render(project.project_category)}
                </ProjectCategory>
                <ProjectTitle>
                    {RichText.render(project.project_title)}
                    {project.project_repo && (
                        <ProjectExternalLink
                            href={project.project_repo.url}
                            target="_blank"
                        >
                            <Button className="Button--secondary">Repo</Button>
                        </ProjectExternalLink>
                    )}
                    {project.project_demo && (
                        <ProjectExternalLink
                            href={project.project_demo.url}
                            target="_blank"
                        >
                            <Button className="Button--secondary">Demo</Button>
                        </ProjectExternalLink>
                    )}
                </ProjectTitle>

                {project.project_hero_image && (
                    <ProjectHeroContainer>
                        <img src={project.project_hero_image.url} alt="bees" />
                    </ProjectHeroContainer>
                )}
                <ProjectBody>
                    {RichText.render(project.project_description)}
                    <ProjectLink to={"/projects"}>
                        <Button className="Button--secondary">
                            See other projects
                        </Button>
                    </ProjectLink>
                </ProjectBody>
            </Layout>
        </>
    );
};

export default ({ data }) => {
    const projectContent = data.prismic.allProjects.edges[0].node;
    const meta = data.site.siteMetadata;
    return <Project project={projectContent} meta={meta} />;
};

Project.propTypes = {
    project: PropTypes.object.isRequired,
};

export const query = graphql`
    query ProjectQuery($uid: String) {
        prismic {
            allProjects(uid: $uid) {
                edges {
                    node {
                        project_title
                        project_preview_description
                        project_preview_thumbnail
                        project_category
                        project_post_date
                        project_hero_image
                        project_description
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
    }
`;
