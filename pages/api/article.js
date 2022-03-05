import client from "../../lib/graphql";
import { gql } from '@apollo/client';

export default async (req, res) => {

    const { data } = await client.query({
        query: gql`
            query {
                user(username: "${req.query.username}") {
                    publication {
                        posts(page: ${parseInt(req.query.page)}) {
                            title
                            brief
                            slug
                            coverImage
                        }
                    }
                }
            }
        `
    });

    console.log(data);

    res.status(200).json(data);
}