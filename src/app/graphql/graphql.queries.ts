import { gql } from 'apollo-angular';

const USER_DESCRIPTIONS = gql`
    query{
        user{
            id,
            email,
            fullName,
            location,
            birthDate,
        }
    }`;

export {USER_DESCRIPTIONS};