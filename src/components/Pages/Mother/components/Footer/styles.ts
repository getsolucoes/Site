import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #f2a7ad;

    & > .footer {
        text-align: center;
        color: #a63c76;
        border-top: 1px solid #a63c76;
        padding: 2rem 1.5rem;
        justify-content: center;
        font-size: 0.875rem;
        display: flex;
        align-items: center;

        & > p {
            line-height: 1.4;
        }
    }
`;

const StyledContainer = styled.div`
    padding: 2rem 1.5rem 1rem;
    position: relative;
    max-width: 1200px;

    & > .unset_mobile {
        display: none;
    }

    @media (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        padding: 4rem 2.5rem 3rem;
        margin: auto;
        & > .mobile {
            display: none;
        }
        & > .unset_mobile {
            display: unset;
        }
    }

    & > img {
        position: absolute;
        top: 2rem;
        right: 1.5rem;
        object-fit: contain;

        @media (min-width: 1024px) {
            position: static;
        }
    }
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 2rem;
    gap: 2rem;

    @media (min-width: 1024px) {
        flex-direction: row;
    }

    & > div {
        @media (min-width: 1024px) {
            flex: 1 1;
        }
        & > h3 {
            font-size: 1.25rem;
            font-weight: 800;
            text-transform: uppercase;
            margin-bottom: 1.5rem;
        }
        & > .social {
            column-count: 2;
            width: fit-content;
            font-size: 1rem;

            @media (min-width: 1024px) {
                column-count: 1;
            }

            & > li {
                color: #f2e4e5;
                margin-bottom: 1.5rem;

                & > a {
                    color: #f2e4e5;
                    @media (min-width: 1024px) {
                        transition: 0.3s;
                        &:hover {
                            color: #a63c76;
                        }
                    }
                }
            }
        }
        & > .contact {
            & > li {
                color: #f2e4e5;
                margin: 1rem 0;
                font-weight: 300;

                & > a {
                    color: #f2e4e5;
                    @media (min-width: 1024px) {
                        transition: 0.3s;
                        &:hover {
                            color: #a63c76;
                        }
                    }
                }
            }
        }
    }
`;

export { StyledFooter, StyledContainer, StyledContent };
