/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateRestaurantInput = {
  id?: string | null;
  name: string;
  description: string;
  city: string;
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelRestaurantConditionInput | null> | null;
  or?: Array<ModelRestaurantConditionInput | null> | null;
  not?: ModelRestaurantConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Restaurant = {
  __typename: "Restaurant";
  id?: string;
  name?: string;
  description?: string;
  city?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateRestaurantInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  city?: string | null;
};

export type DeleteRestaurantInput = {
  id: string;
};

export type CreateCeremonyInput = {
  id?: string | null;
  date?: string | null;
  description?: string | null;
  hostID?: string | null;
};

export type ModelCeremonyConditionInput = {
  date?: ModelStringInput | null;
  description?: ModelStringInput | null;
  hostID?: ModelIDInput | null;
  and?: Array<ModelCeremonyConditionInput | null> | null;
  or?: Array<ModelCeremonyConditionInput | null> | null;
  not?: ModelCeremonyConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Ceremony = {
  __typename: "Ceremony";
  id?: string;
  date?: string | null;
  description?: string | null;
  hostID?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateCeremonyInput = {
  id: string;
  date?: string | null;
  description?: string | null;
  hostID?: string | null;
};

export type DeleteCeremonyInput = {
  id: string;
};

export type CreateHostInput = {
  id?: string | null;
  name?: string | null;
  address?: string | null;
};

export type ModelHostConditionInput = {
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  and?: Array<ModelHostConditionInput | null> | null;
  or?: Array<ModelHostConditionInput | null> | null;
  not?: ModelHostConditionInput | null;
};

export type Host = {
  __typename: "Host";
  id?: string;
  name?: string | null;
  address?: string | null;
  Ceremonies?: ModelCeremonyConnection;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelCeremonyConnection = {
  __typename: "ModelCeremonyConnection";
  items?: Array<Ceremony | null> | null;
  nextToken?: string | null;
};

export type UpdateHostInput = {
  id: string;
  name?: string | null;
  address?: string | null;
};

export type DeleteHostInput = {
  id: string;
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelRestaurantFilterInput | null> | null;
  or?: Array<ModelRestaurantFilterInput | null> | null;
  not?: ModelRestaurantFilterInput | null;
};

export type ModelRestaurantConnection = {
  __typename: "ModelRestaurantConnection";
  items?: Array<Restaurant | null> | null;
  nextToken?: string | null;
};

export type ModelCeremonyFilterInput = {
  id?: ModelIDInput | null;
  date?: ModelStringInput | null;
  description?: ModelStringInput | null;
  hostID?: ModelIDInput | null;
  and?: Array<ModelCeremonyFilterInput | null> | null;
  or?: Array<ModelCeremonyFilterInput | null> | null;
  not?: ModelCeremonyFilterInput | null;
};

export type ModelHostFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  and?: Array<ModelHostFilterInput | null> | null;
  or?: Array<ModelHostFilterInput | null> | null;
  not?: ModelHostFilterInput | null;
};

export type ModelHostConnection = {
  __typename: "ModelHostConnection";
  items?: Array<Host | null> | null;
  nextToken?: string | null;
};

export type CreateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateCeremonyMutation = {
  __typename: "Ceremony";
  id: string;
  date?: string | null;
  description?: string | null;
  hostID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCeremonyMutation = {
  __typename: "Ceremony";
  id: string;
  date?: string | null;
  description?: string | null;
  hostID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCeremonyMutation = {
  __typename: "Ceremony";
  id: string;
  date?: string | null;
  description?: string | null;
  hostID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateHostMutation = {
  __typename: "Host";
  id: string;
  name?: string | null;
  address?: string | null;
  Ceremonies?: {
    __typename: "ModelCeremonyConnection";
    items?: Array<{
      __typename: "Ceremony";
      id: string;
      date?: string | null;
      description?: string | null;
      hostID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateHostMutation = {
  __typename: "Host";
  id: string;
  name?: string | null;
  address?: string | null;
  Ceremonies?: {
    __typename: "ModelCeremonyConnection";
    items?: Array<{
      __typename: "Ceremony";
      id: string;
      date?: string | null;
      description?: string | null;
      hostID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteHostMutation = {
  __typename: "Host";
  id: string;
  name?: string | null;
  address?: string | null;
  Ceremonies?: {
    __typename: "ModelCeremonyConnection";
    items?: Array<{
      __typename: "Ceremony";
      id: string;
      date?: string | null;
      description?: string | null;
      hostID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetRestaurantQuery = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type ListRestaurantsQuery = {
  __typename: "ModelRestaurantConnection";
  items?: Array<{
    __typename: "Restaurant";
    id: string;
    name: string;
    description: string;
    city: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCeremonyQuery = {
  __typename: "Ceremony";
  id: string;
  date?: string | null;
  description?: string | null;
  hostID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCeremonysQuery = {
  __typename: "ModelCeremonyConnection";
  items?: Array<{
    __typename: "Ceremony";
    id: string;
    date?: string | null;
    description?: string | null;
    hostID?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetHostQuery = {
  __typename: "Host";
  id: string;
  name?: string | null;
  address?: string | null;
  Ceremonies?: {
    __typename: "ModelCeremonyConnection";
    items?: Array<{
      __typename: "Ceremony";
      id: string;
      date?: string | null;
      description?: string | null;
      hostID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListHostsQuery = {
  __typename: "ModelHostConnection";
  items?: Array<{
    __typename: "Host";
    id: string;
    name?: string | null;
    address?: string | null;
    Ceremonies?: {
      __typename: "ModelCeremonyConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCeremonySubscription = {
  __typename: "Ceremony";
  id: string;
  date?: string | null;
  description?: string | null;
  hostID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCeremonySubscription = {
  __typename: "Ceremony";
  id: string;
  date?: string | null;
  description?: string | null;
  hostID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCeremonySubscription = {
  __typename: "Ceremony";
  id: string;
  date?: string | null;
  description?: string | null;
  hostID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateHostSubscription = {
  __typename: "Host";
  id: string;
  name?: string | null;
  address?: string | null;
  Ceremonies?: {
    __typename: "ModelCeremonyConnection";
    items?: Array<{
      __typename: "Ceremony";
      id: string;
      date?: string | null;
      description?: string | null;
      hostID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateHostSubscription = {
  __typename: "Host";
  id: string;
  name?: string | null;
  address?: string | null;
  Ceremonies?: {
    __typename: "ModelCeremonyConnection";
    items?: Array<{
      __typename: "Ceremony";
      id: string;
      date?: string | null;
      description?: string | null;
      hostID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteHostSubscription = {
  __typename: "Host";
  id: string;
  name?: string | null;
  address?: string | null;
  Ceremonies?: {
    __typename: "ModelCeremonyConnection";
    items?: Array<{
      __typename: "Ceremony";
      id: string;
      date?: string | null;
      description?: string | null;
      hostID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateRestaurant(
    input: CreateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<CreateRestaurantMutation> {
    const statement = `mutation CreateRestaurant($input: CreateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        createRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRestaurantMutation>response.data.createRestaurant;
  }
  async UpdateRestaurant(
    input: UpdateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<UpdateRestaurantMutation> {
    const statement = `mutation UpdateRestaurant($input: UpdateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        updateRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRestaurantMutation>response.data.updateRestaurant;
  }
  async DeleteRestaurant(
    input: DeleteRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<DeleteRestaurantMutation> {
    const statement = `mutation DeleteRestaurant($input: DeleteRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        deleteRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRestaurantMutation>response.data.deleteRestaurant;
  }
  async CreateCeremony(
    input: CreateCeremonyInput,
    condition?: ModelCeremonyConditionInput
  ): Promise<CreateCeremonyMutation> {
    const statement = `mutation CreateCeremony($input: CreateCeremonyInput!, $condition: ModelCeremonyConditionInput) {
        createCeremony(input: $input, condition: $condition) {
          __typename
          id
          date
          description
          hostID
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCeremonyMutation>response.data.createCeremony;
  }
  async UpdateCeremony(
    input: UpdateCeremonyInput,
    condition?: ModelCeremonyConditionInput
  ): Promise<UpdateCeremonyMutation> {
    const statement = `mutation UpdateCeremony($input: UpdateCeremonyInput!, $condition: ModelCeremonyConditionInput) {
        updateCeremony(input: $input, condition: $condition) {
          __typename
          id
          date
          description
          hostID
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCeremonyMutation>response.data.updateCeremony;
  }
  async DeleteCeremony(
    input: DeleteCeremonyInput,
    condition?: ModelCeremonyConditionInput
  ): Promise<DeleteCeremonyMutation> {
    const statement = `mutation DeleteCeremony($input: DeleteCeremonyInput!, $condition: ModelCeremonyConditionInput) {
        deleteCeremony(input: $input, condition: $condition) {
          __typename
          id
          date
          description
          hostID
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCeremonyMutation>response.data.deleteCeremony;
  }
  async CreateHost(
    input: CreateHostInput,
    condition?: ModelHostConditionInput
  ): Promise<CreateHostMutation> {
    const statement = `mutation CreateHost($input: CreateHostInput!, $condition: ModelHostConditionInput) {
        createHost(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          Ceremonies {
            __typename
            items {
              __typename
              id
              date
              description
              hostID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateHostMutation>response.data.createHost;
  }
  async UpdateHost(
    input: UpdateHostInput,
    condition?: ModelHostConditionInput
  ): Promise<UpdateHostMutation> {
    const statement = `mutation UpdateHost($input: UpdateHostInput!, $condition: ModelHostConditionInput) {
        updateHost(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          Ceremonies {
            __typename
            items {
              __typename
              id
              date
              description
              hostID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateHostMutation>response.data.updateHost;
  }
  async DeleteHost(
    input: DeleteHostInput,
    condition?: ModelHostConditionInput
  ): Promise<DeleteHostMutation> {
    const statement = `mutation DeleteHost($input: DeleteHostInput!, $condition: ModelHostConditionInput) {
        deleteHost(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          Ceremonies {
            __typename
            items {
              __typename
              id
              date
              description
              hostID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteHostMutation>response.data.deleteHost;
  }
  async GetRestaurant(id: string): Promise<GetRestaurantQuery> {
    const statement = `query GetRestaurant($id: ID!) {
        getRestaurant(id: $id) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRestaurantQuery>response.data.getRestaurant;
  }
  async ListRestaurants(
    filter?: ModelRestaurantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRestaurantsQuery> {
    const statement = `query ListRestaurants($filter: ModelRestaurantFilterInput, $limit: Int, $nextToken: String) {
        listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            city
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRestaurantsQuery>response.data.listRestaurants;
  }
  async GetCeremony(id: string): Promise<GetCeremonyQuery> {
    const statement = `query GetCeremony($id: ID!) {
        getCeremony(id: $id) {
          __typename
          id
          date
          description
          hostID
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCeremonyQuery>response.data.getCeremony;
  }
  async ListCeremonys(
    filter?: ModelCeremonyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCeremonysQuery> {
    const statement = `query ListCeremonys($filter: ModelCeremonyFilterInput, $limit: Int, $nextToken: String) {
        listCeremonys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            date
            description
            hostID
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCeremonysQuery>response.data.listCeremonys;
  }
  async GetHost(id: string): Promise<GetHostQuery> {
    const statement = `query GetHost($id: ID!) {
        getHost(id: $id) {
          __typename
          id
          name
          address
          Ceremonies {
            __typename
            items {
              __typename
              id
              date
              description
              hostID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetHostQuery>response.data.getHost;
  }
  async ListHosts(
    filter?: ModelHostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListHostsQuery> {
    const statement = `query ListHosts($filter: ModelHostFilterInput, $limit: Int, $nextToken: String) {
        listHosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            address
            Ceremonies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListHostsQuery>response.data.listHosts;
  }
  OnCreateRestaurantListener: Observable<
    SubscriptionResponse<OnCreateRestaurantSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRestaurant {
        onCreateRestaurant {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateRestaurantSubscription>>;

  OnUpdateRestaurantListener: Observable<
    SubscriptionResponse<OnUpdateRestaurantSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRestaurant {
        onUpdateRestaurant {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateRestaurantSubscription>>;

  OnDeleteRestaurantListener: Observable<
    SubscriptionResponse<OnDeleteRestaurantSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRestaurant {
        onDeleteRestaurant {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteRestaurantSubscription>>;

  OnCreateCeremonyListener: Observable<
    SubscriptionResponse<OnCreateCeremonySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCeremony {
        onCreateCeremony {
          __typename
          id
          date
          description
          hostID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCeremonySubscription>>;

  OnUpdateCeremonyListener: Observable<
    SubscriptionResponse<OnUpdateCeremonySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCeremony {
        onUpdateCeremony {
          __typename
          id
          date
          description
          hostID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCeremonySubscription>>;

  OnDeleteCeremonyListener: Observable<
    SubscriptionResponse<OnDeleteCeremonySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCeremony {
        onDeleteCeremony {
          __typename
          id
          date
          description
          hostID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCeremonySubscription>>;

  OnCreateHostListener: Observable<
    SubscriptionResponse<OnCreateHostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateHost {
        onCreateHost {
          __typename
          id
          name
          address
          Ceremonies {
            __typename
            items {
              __typename
              id
              date
              description
              hostID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateHostSubscription>>;

  OnUpdateHostListener: Observable<
    SubscriptionResponse<OnUpdateHostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateHost {
        onUpdateHost {
          __typename
          id
          name
          address
          Ceremonies {
            __typename
            items {
              __typename
              id
              date
              description
              hostID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateHostSubscription>>;

  OnDeleteHostListener: Observable<
    SubscriptionResponse<OnDeleteHostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteHost {
        onDeleteHost {
          __typename
          id
          name
          address
          Ceremonies {
            __typename
            items {
              __typename
              id
              date
              description
              hostID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteHostSubscription>>;
}
