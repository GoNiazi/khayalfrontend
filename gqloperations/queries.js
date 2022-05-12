import { gql } from "@apollo/client";

export const GET_NAVBAR = gql`
  query navbar {
    navbar {
      data {
        id
        attributes {
          navigation {
            panels {
              link {
                label
                href
                target
              }
              section {
                id
                links {
                  id
                  label
                  href
                  target
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_HEROSECTION = gql`
  query HeroSection($slug: String) {
    homeSectionTypes(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          post {
            data {
              attributes {
                title
                description
                images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                button {
                  id
                  label
                  href
                  target
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CHALLENGESSECTION = gql`
  query ChallengesSection($slug: String) {
    homeSectionTypes(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          post {
            data {
              attributes {
                title
                description
                images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                button {
                  id
                  label
                  href
                  target
                }
                seo {
                  id
                  metaTitle
                  metaDescription
                  shareImage {
                    alt
                    image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  keywords
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CUSTOMER_SATISFACTION_SECTION = gql`
  query customersatisfactionSection($slug: String) {
    homeSectionTypes(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          post {
            data {
              attributes {
                title
                description
                images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                button {
                  id
                  label
                  href
                  target
                }
                seo {
                  id
                  metaTitle
                  metaDescription
                  shareImage {
                    alt
                    image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  keywords
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_SOFT_SERVICES = gql`
  query SoftSerivces($slug: String) {
    services(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          posts {
            data {
              attributes {
                title
                description
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_REVIEWS = gql`
  query services {
    reviews {
      data {
        id
        attributes {
          name
          description
          company_name
          image {
            alt
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CLIENTS = gql`
  query clients {
    clients(sort: ["id:desc"]) {
      data {
        id
        attributes {
          logo {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_GALLERY = gql`
  query gallery {
    gallery {
      data {
        id
        attributes {
          Images(sort: ["id:asc"]) {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_SERVICE = gql`
  query services($slug: String) {
    services(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          posts {
            data {
              attributes {
                title
                description
                images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const USER_FEEDBACK = gql`
  mutation createUserFeedback($input: UserFeedbackInput!) {
    createUserFeedback(data: $input) {
      data {
        attributes {
          first_name
          last_name
          services_hired
          designation
          email
          phone
          comment
        }
      }
    }
  }
`;
