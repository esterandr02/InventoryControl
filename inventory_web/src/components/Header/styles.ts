import styled from 'styled-components';

export const Container = styled.div`
    background: #522b47;
    padding: 24px 0;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        padding: 0 20px;

        width: 1120px;

        nav {
            a {
                color: #fff;
                font-size: 16px;
                text-decoration: none;

                & + a {
                    margin-left: 32px;
                }

                transition: opacity 0.3s;
                &:hover {
                    opacity: 0.6;
                }
            }
        }
    }
`;
