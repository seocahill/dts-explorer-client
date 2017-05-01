export default [
    {
        "id": "7f58a893-f4aa-483f-9e6f-13c466c5569c",
        "roleTypeId": "1",
        "elementId": "uk-bus_NameThirdPartyAgent",
        "parentId": null,
        "order": "0",
        "arcrole": "primary-item"
    },
    {
        "id": "3c80649b-a0a4-4169-857b-5a8529c5a539",
        "roleTypeId": "1",
        "elementId": "uk-bus_DimensionsParent-ThirdPartyAgents",
        "parentId": "7f58a893-f4aa-483f-9e6f-13c466c5569c",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "868a7b95-8dbc-49d0-a3d4-07f2f2a74ede",
        "roleTypeId": "1",
        "elementId": "uk-bus_ThirdPartyAgentsHypercube",
        "parentId": "3c80649b-a0a4-4169-857b-5a8529c5a539",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/all"
    },
    {
        "id": "8da16e91-4dfc-4e06-9741-6fc57e0e6f32",
        "roleTypeId": "1",
        "elementId": "uk-bus_ThirdPartyAgentTypeDimension",
        "parentId": "868a7b95-8dbc-49d0-a3d4-07f2f2a74ede",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/hypercube-dimension"
    },
    {
        "id": "16b63f02-891d-439b-98ce-260855061e1e",
        "roleTypeId": "1",
        "elementId": "uk-bus_DimensionMembersIdentifyingTypeThirdPartyAgentHeading",
        "parentId": "8da16e91-4dfc-4e06-9741-6fc57e0e6f32",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-domain"
    },
    {
        "id": "2f9398c8-f60c-4a08-af93-427fe2bd81de",
        "roleTypeId": "1",
        "elementId": "uk-bus_EntityAccountantsOrAuditors",
        "parentId": "16b63f02-891d-439b-98ce-260855061e1e",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "12011c31-d1f3-4839-ab59-a5bf36037aac",
        "roleTypeId": "1",
        "elementId": "uk-bus_EntityBankers",
        "parentId": "16b63f02-891d-439b-98ce-260855061e1e",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "602d27e8-579e-47f5-af6f-65c33d013886",
        "roleTypeId": "1",
        "elementId": "uk-bus_EntityLawyersOrLegalAdvisers",
        "parentId": "16b63f02-891d-439b-98ce-260855061e1e",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "429f1b66-5594-4f54-9b6d-630d0b8046e8",
        "roleTypeId": "1",
        "elementId": "uk-bus_EntityPublicRelationsAdvisers",
        "parentId": "16b63f02-891d-439b-98ce-260855061e1e",
        "order": "4",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "ef59caf6-890a-4606-b403-e16f305b1c73",
        "roleTypeId": "1",
        "elementId": "uk-bus_EntityRegistrationAgents",
        "parentId": "16b63f02-891d-439b-98ce-260855061e1e",
        "order": "5",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "f465eaa7-58b0-42b2-8c9c-b6f9d25da55e",
        "roleTypeId": "1",
        "elementId": "uk-bus_EntityUnderwriters",
        "parentId": "16b63f02-891d-439b-98ce-260855061e1e",
        "order": "6",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "1d62bc11-ce55-4fbc-8f5a-9c45a52a65a6",
        "roleTypeId": "1",
        "elementId": "uk-bus_AdministratorsForEntity",
        "parentId": "16b63f02-891d-439b-98ce-260855061e1e",
        "order": "7",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "d21ba94c-058d-4741-954c-496c0ce9c1ff",
        "roleTypeId": "1",
        "elementId": "uk-bus_ReceiversForEntity",
        "parentId": "16b63f02-891d-439b-98ce-260855061e1e",
        "order": "8",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "38010ed3-be43-4812-9eb0-3a5eb46e0bd5",
        "roleTypeId": "1",
        "elementId": "uk-bus_ThirdPartyAgentStatusDimension",
        "parentId": "868a7b95-8dbc-49d0-a3d4-07f2f2a74ede",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/hypercube-dimension"
    },
    {
        "id": "36613f67-9327-4e6f-91d7-91449a3fab99",
        "roleTypeId": "1",
        "elementId": "uk-bus_TotalAgentsDefault",
        "parentId": "38010ed3-be43-4812-9eb0-3a5eb46e0bd5",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-domain"
    },
    {
        "id": "ce70f340-f067-4c4f-9f79-301cd5c0ef0b",
        "roleTypeId": "1",
        "elementId": "uk-bus_PrincipalAgent",
        "parentId": "36613f67-9327-4e6f-91d7-91449a3fab99",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "d2441c29-3859-43e7-868a-e599d4bc38ac",
        "roleTypeId": "1",
        "elementId": "uk-bus_JointAgent1",
        "parentId": "36613f67-9327-4e6f-91d7-91449a3fab99",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "9b0bed83-a148-48b2-a93e-bd425ea18408",
        "roleTypeId": "1",
        "elementId": "uk-bus_JointAgent2",
        "parentId": "36613f67-9327-4e6f-91d7-91449a3fab99",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "dcfe3170-a4cb-4ba4-b45f-f29608e4e377",
        "roleTypeId": "1",
        "elementId": "uk-bus_JointAgent3",
        "parentId": "36613f67-9327-4e6f-91d7-91449a3fab99",
        "order": "4",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "11c64514-b93c-4d4f-9a6a-1333f4abfe8c",
        "roleTypeId": "1",
        "elementId": "uk-bus_TotalAgentsDefault",
        "parentId": "38010ed3-be43-4812-9eb0-3a5eb46e0bd5",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-default"
    },
    {
        "id": "75aa28e4-9c39-47f3-b3c3-f47c86a5944a",
        "roleTypeId": "1",
        "elementId": "uk-bus_PrincipalAgent",
        "parentId": "11c64514-b93c-4d4f-9a6a-1333f4abfe8c",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "cebed5c3-5072-4511-9780-5700350fecce",
        "roleTypeId": "1",
        "elementId": "uk-bus_JointAgent1",
        "parentId": "11c64514-b93c-4d4f-9a6a-1333f4abfe8c",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "16610f74-e591-41b3-a6f3-2811c39e55ab",
        "roleTypeId": "1",
        "elementId": "uk-bus_JointAgent2",
        "parentId": "11c64514-b93c-4d4f-9a6a-1333f4abfe8c",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "fa9b58a8-1848-4378-98d2-57cbb04bdf61",
        "roleTypeId": "1",
        "elementId": "uk-bus_JointAgent3",
        "parentId": "11c64514-b93c-4d4f-9a6a-1333f4abfe8c",
        "order": "4",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "59b03c26-37a7-4ce8-986f-93fba60cdaa3",
        "roleTypeId": "1",
        "elementId": "uk-bus_FormContactDimension",
        "parentId": "868a7b95-8dbc-49d0-a3d4-07f2f2a74ede",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/hypercube-dimension"
    },
    {
        "id": "98f63795-0f1d-4a38-9a1b-885a714ac395",
        "roleTypeId": "1",
        "elementId": "uk-bus_DimensionMembersIdentifyingFormContactHeading",
        "parentId": "59b03c26-37a7-4ce8-986f-93fba60cdaa3",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-domain"
    },
    {
        "id": "2eec4712-deb1-4b02-afd3-33b82366793f",
        "roleTypeId": "1",
        "elementId": "uk-bus_MainFormContactDefault",
        "parentId": "98f63795-0f1d-4a38-9a1b-885a714ac395",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "8924cbef-2765-4f24-b50a-90b1d7cefae3",
        "roleTypeId": "1",
        "elementId": "uk-bus_Direct",
        "parentId": "98f63795-0f1d-4a38-9a1b-885a714ac395",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "af0e3f51-9585-47d3-b448-4c0bd6ce1d78",
        "roleTypeId": "1",
        "elementId": "uk-bus_Switchboard",
        "parentId": "98f63795-0f1d-4a38-9a1b-885a714ac395",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "044e9481-11bd-4773-8784-d2cbf91a4e1f",
        "roleTypeId": "1",
        "elementId": "uk-bus_Office",
        "parentId": "98f63795-0f1d-4a38-9a1b-885a714ac395",
        "order": "4",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "88c6eac7-1d86-4522-ba2c-2d27402a0d82",
        "roleTypeId": "1",
        "elementId": "uk-bus_Personal",
        "parentId": "98f63795-0f1d-4a38-9a1b-885a714ac395",
        "order": "5",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "b302a867-63ec-40f1-a610-8759509f8a7b",
        "roleTypeId": "1",
        "elementId": "uk-bus_Home",
        "parentId": "98f63795-0f1d-4a38-9a1b-885a714ac395",
        "order": "6",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "55f08cd7-ea37-4e69-a917-93d334a4574c",
        "roleTypeId": "1",
        "elementId": "uk-bus_Day",
        "parentId": "98f63795-0f1d-4a38-9a1b-885a714ac395",
        "order": "7",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "9410eebc-cd30-48b6-87a2-148ef6f6543b",
        "roleTypeId": "1",
        "elementId": "uk-bus_Night",
        "parentId": "98f63795-0f1d-4a38-9a1b-885a714ac395",
        "order": "8",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "46c8c140-2355-482e-bc26-5b8cbb6b50f5",
        "roleTypeId": "1",
        "elementId": "uk-bus_Emergency",
        "parentId": "98f63795-0f1d-4a38-9a1b-885a714ac395",
        "order": "9",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "bb1aef1d-e887-4049-a366-10fdf5563c32",
        "roleTypeId": "1",
        "elementId": "uk-bus_AlternativeFormContact1",
        "parentId": "98f63795-0f1d-4a38-9a1b-885a714ac395",
        "order": "10",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "fc1afca5-7143-464a-82c8-ed558b0d1c39",
        "roleTypeId": "1",
        "elementId": "uk-bus_AlternativeFormContact2",
        "parentId": "98f63795-0f1d-4a38-9a1b-885a714ac395",
        "order": "11",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "ebe26e56-bd82-4a34-af44-2c9bf2e5996c",
        "roleTypeId": "1",
        "elementId": "uk-bus_AlternativeFormContact3",
        "parentId": "98f63795-0f1d-4a38-9a1b-885a714ac395",
        "order": "12",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "ee77a05b-76ff-4ecf-a969-03923c06defd",
        "roleTypeId": "1",
        "elementId": "uk-bus_MainFormContactDefault",
        "parentId": "59b03c26-37a7-4ce8-986f-93fba60cdaa3",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-default"
    },
    {
        "id": "bdda80a4-89e7-4d9b-aeae-5e4e350f692c",
        "roleTypeId": "1",
        "elementId": "uk-bus_AddressTypeDimension",
        "parentId": "868a7b95-8dbc-49d0-a3d4-07f2f2a74ede",
        "order": "4",
        "arcrole": "http://xbrl.org/int/dim/arcrole/hypercube-dimension"
    },
    {
        "id": "90025b97-5438-4416-b5af-92293946e46a",
        "roleTypeId": "1",
        "elementId": "uk-bus_DimensionMembersIdentifyingTypeAddressHeading",
        "parentId": "bdda80a4-89e7-4d9b-aeae-5e4e350f692c",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-domain"
    },
    {
        "id": "be235e90-486c-42cf-a4b8-551d0f7f177a",
        "roleTypeId": "1",
        "elementId": "uk-bus_MainAddressDefault",
        "parentId": "90025b97-5438-4416-b5af-92293946e46a",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "2bf01960-53d2-4a16-b47d-ac2f80eb200d",
        "roleTypeId": "1",
        "elementId": "uk-bus_Postal",
        "parentId": "90025b97-5438-4416-b5af-92293946e46a",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "82b4052d-0247-41f5-8761-e88331f235f0",
        "roleTypeId": "1",
        "elementId": "uk-bus_Street",
        "parentId": "90025b97-5438-4416-b5af-92293946e46a",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "415ecb3d-b792-4165-93da-b57de2c42d77",
        "roleTypeId": "1",
        "elementId": "uk-bus_MainAddressDefault",
        "parentId": "bdda80a4-89e7-4d9b-aeae-5e4e350f692c",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-default"
    },
    {
        "id": "fc1530b6-6402-413e-9ffa-77293776e326",
        "roleTypeId": "1",
        "elementId": "uk-bus_PhoneNumberTypeDimension",
        "parentId": "868a7b95-8dbc-49d0-a3d4-07f2f2a74ede",
        "order": "5",
        "arcrole": "http://xbrl.org/int/dim/arcrole/hypercube-dimension"
    },
    {
        "id": "09c8b056-b242-4321-9b86-ae5399c3645c",
        "roleTypeId": "1",
        "elementId": "uk-bus_DimensionMembersIdentifyingTypePhoneNumberHeading",
        "parentId": "fc1530b6-6402-413e-9ffa-77293776e326",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-domain"
    },
    {
        "id": "7cad8afd-9afd-4056-a0d0-aef677bd0b08",
        "roleTypeId": "1",
        "elementId": "uk-bus_Landline",
        "parentId": "09c8b056-b242-4321-9b86-ae5399c3645c",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "d8facbb7-48af-4a8b-ab6b-59cef6fa0efc",
        "roleTypeId": "1",
        "elementId": "uk-bus_Mobile",
        "parentId": "09c8b056-b242-4321-9b86-ae5399c3645c",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "b8299f80-69c8-4daf-a4b4-b94732b6131a",
        "roleTypeId": "1",
        "elementId": "uk-bus_Fax",
        "parentId": "09c8b056-b242-4321-9b86-ae5399c3645c",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "efcf227e-a601-4c33-b25b-47d2459d45db",
        "roleTypeId": "1",
        "elementId": "uk-common_NotApplicable",
        "parentId": "09c8b056-b242-4321-9b86-ae5399c3645c",
        "order": "4",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "ac6747e7-dc71-4c38-a1f0-e549d60795a1",
        "roleTypeId": "1",
        "elementId": "uk-common_NotApplicable",
        "parentId": "fc1530b6-6402-413e-9ffa-77293776e326",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-default"
    },
    {
        "id": "1e5cf12e-5272-4787-8125-e139725766fc",
        "roleTypeId": "1",
        "elementId": "uk-countries_CountriesDimension",
        "parentId": "868a7b95-8dbc-49d0-a3d4-07f2f2a74ede",
        "order": "6",
        "arcrole": "http://xbrl.org/int/dim/arcrole/hypercube-dimension"
    },
    {
        "id": "5470a519-ab3a-46fb-bc70-e0dda329d71f",
        "roleTypeId": "1",
        "elementId": "uk-countries_DimensionMembersRepresentingCountriesRegionsHeading",
        "parentId": "1e5cf12e-5272-4787-8125-e139725766fc",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-domain"
    },
    {
        "id": "be64d597-44b2-47c9-9cae-e35ef0e0aab8",
        "roleTypeId": "1",
        "elementId": "uk-countries_AllCountries",
        "parentId": "5470a519-ab3a-46fb-bc70-e0dda329d71f",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "2c8c5d59-f310-4150-a17c-375bb6a1b4da",
        "roleTypeId": "1",
        "elementId": "uk-countries_HomeCountriesHeading",
        "parentId": "5470a519-ab3a-46fb-bc70-e0dda329d71f",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "fe00b4ef-4f97-477e-8ea4-7e1fdef988bc",
        "roleTypeId": "1",
        "elementId": "uk-countries_MainRegionsHeading",
        "parentId": "5470a519-ab3a-46fb-bc70-e0dda329d71f",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "69013301-295a-4dde-8d7b-4664988fe712",
        "roleTypeId": "1",
        "elementId": "uk-countries_CountryListHeading",
        "parentId": "5470a519-ab3a-46fb-bc70-e0dda329d71f",
        "order": "4",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "a8ceaca3-382b-4d5c-bf3d-8191d7a75817",
        "roleTypeId": "1",
        "elementId": "uk-common_NotApplicable",
        "parentId": "5470a519-ab3a-46fb-bc70-e0dda329d71f",
        "order": "5",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "2b33cf3e-e404-4612-96bd-dadb7db0ffa7",
        "roleTypeId": "1",
        "elementId": "uk-common_NotApplicable",
        "parentId": "1e5cf12e-5272-4787-8125-e139725766fc",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-default"
    },
    {
        "id": "dc7871bc-930e-478c-b034-e82b8b8c88d4",
        "roleTypeId": "1",
        "elementId": "uk-lang_LanguagesDimension",
        "parentId": "868a7b95-8dbc-49d0-a3d4-07f2f2a74ede",
        "order": "7",
        "arcrole": "http://xbrl.org/int/dim/arcrole/hypercube-dimension"
    },
    {
        "id": "178804ec-3041-4eb4-b14b-575c825fd709",
        "roleTypeId": "1",
        "elementId": "uk-lang_DimensionMembersRepresentingLanguagesHeading",
        "parentId": "dc7871bc-930e-478c-b034-e82b8b8c88d4",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-domain"
    },
    {
        "id": "d6c3f8e4-27f4-4019-948d-e525d8038aa1",
        "roleTypeId": "1",
        "elementId": "uk-lang_English",
        "parentId": "178804ec-3041-4eb4-b14b-575c825fd709",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "b68d287c-6a56-4fb5-a713-d871afdfd0a1",
        "roleTypeId": "1",
        "elementId": "uk-lang_AllLanguages",
        "parentId": "178804ec-3041-4eb4-b14b-575c825fd709",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "bc3c1feb-6cf1-4749-a7c0-c57e12379535",
        "roleTypeId": "1",
        "elementId": "uk-lang_LanguageListHeading",
        "parentId": "178804ec-3041-4eb4-b14b-575c825fd709",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "c29e14e4-a29c-47d9-8740-a5b98c8de535",
        "roleTypeId": "1",
        "elementId": "uk-common_NotApplicable",
        "parentId": "178804ec-3041-4eb4-b14b-575c825fd709",
        "order": "4",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "0755e883-2f80-4d44-acc1-de2c9ac49c7d",
        "roleTypeId": "1",
        "elementId": "uk-common_NotApplicable",
        "parentId": "dc7871bc-930e-478c-b034-e82b8b8c88d4",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-default"
    },
    {
        "id": "12b135a1-77bb-4945-a72e-72807b4b0426",
        "roleTypeId": "1",
        "elementId": "uk-gaap_GroupCompanyDimension",
        "parentId": "868a7b95-8dbc-49d0-a3d4-07f2f2a74ede",
        "order": "8",
        "arcrole": "http://xbrl.org/int/dim/arcrole/hypercube-dimension"
    },
    {
        "id": "cfab7be7-8baf-4242-9a76-40192726159c",
        "roleTypeId": "1",
        "elementId": "uk-gaap_Consolidated",
        "parentId": "12b135a1-77bb-4945-a72e-72807b4b0426",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-domain"
    },
    {
        "id": "0d98d637-7eb7-4b9f-ba2d-2a7cd8b24081",
        "roleTypeId": "1",
        "elementId": "uk-gaap_CompanyDefault",
        "parentId": "cfab7be7-8baf-4242-9a76-40192726159c",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "1c9f3007-da11-4112-9f1f-1fdfce799945",
        "roleTypeId": "1",
        "elementId": "uk-gaap_GroupShareJoint-venturesExcludingAssociatesTurnoverOnly",
        "parentId": "cfab7be7-8baf-4242-9a76-40192726159c",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "4cb57c93-e583-48f9-a9a9-ea2db5f8c482",
        "roleTypeId": "1",
        "elementId": "uk-gaap_ShareJoint-venturesAssociates",
        "parentId": "cfab7be7-8baf-4242-9a76-40192726159c",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "a1c6b7ea-1281-48df-896e-9a055f2d3c17",
        "roleTypeId": "1",
        "elementId": "uk-gaap_ShareJoint-ventures",
        "parentId": "cfab7be7-8baf-4242-9a76-40192726159c",
        "order": "3",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "4d320b8a-3822-4ed9-908e-4086a8a62d89",
        "roleTypeId": "1",
        "elementId": "uk-gaap_GroupAfterAssociatesBeforeJoint-ventures",
        "parentId": "cfab7be7-8baf-4242-9a76-40192726159c",
        "order": "4",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "5f801451-e00d-4c62-86eb-20442ce850aa",
        "roleTypeId": "1",
        "elementId": "uk-gaap_ShareAssociates",
        "parentId": "cfab7be7-8baf-4242-9a76-40192726159c",
        "order": "5",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "bc5c6eb6-a81b-443d-a4c2-4c1b561014d7",
        "roleTypeId": "1",
        "elementId": "uk-gaap_GroupBeforeAssociatesJoint-ventures",
        "parentId": "cfab7be7-8baf-4242-9a76-40192726159c",
        "order": "6",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "816529ae-b1ec-43fc-9f9f-30c2afa7fd55",
        "roleTypeId": "1",
        "elementId": "uk-gaap_CompanyDefault",
        "parentId": "cfab7be7-8baf-4242-9a76-40192726159c",
        "order": "7",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "0d35fbc6-1964-4e6f-b646-751ec5bb6eaf",
        "roleTypeId": "1",
        "elementId": "uk-gaap_CompanyDefault",
        "parentId": "12b135a1-77bb-4945-a72e-72807b4b0426",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-default"
    },
    {
        "id": "61310519-5757-46d5-bf88-634c61f3bfbd",
        "roleTypeId": "1",
        "elementId": "uk-gaap_RestatementsDimension",
        "parentId": "868a7b95-8dbc-49d0-a3d4-07f2f2a74ede",
        "order": "9",
        "arcrole": "http://xbrl.org/int/dim/arcrole/hypercube-dimension"
    },
    {
        "id": "334b7aea-8954-4f01-af1f-3328759b2b5e",
        "roleTypeId": "1",
        "elementId": "uk-gaap_RestatedAmount",
        "parentId": "61310519-5757-46d5-bf88-634c61f3bfbd",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-domain"
    },
    {
        "id": "fc2ebf61-8085-4276-8370-2d49915f75ee",
        "roleTypeId": "1",
        "elementId": "uk-gaap_PriorPeriodIncreaseDecrease",
        "parentId": "334b7aea-8954-4f01-af1f-3328759b2b5e",
        "order": "1",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "e6ad0365-baea-49f6-b948-8d01331c1dc5",
        "roleTypeId": "1",
        "elementId": "uk-gaap_OriginalAmountDefault",
        "parentId": "334b7aea-8954-4f01-af1f-3328759b2b5e",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/domain-member"
    },
    {
        "id": "398283dc-ff6c-4d07-b24f-5f8bb320b615",
        "roleTypeId": "1",
        "elementId": "uk-gaap_OriginalAmountDefault",
        "parentId": "61310519-5757-46d5-bf88-634c61f3bfbd",
        "order": "2",
        "arcrole": "http://xbrl.org/int/dim/arcrole/dimension-default"
    }
]