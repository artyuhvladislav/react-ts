import { gql } from '@apollo/client';

export const cityWeather = gql`
query getCityByName($name: String!) {
  getCityByName(name: $name) {
    name
    country
    weather {
      summary {
        title
      }
      temperature {
        actual
      }
    }
  }
}
`;