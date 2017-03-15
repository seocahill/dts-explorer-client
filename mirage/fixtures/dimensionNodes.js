export default [
    {
        "id": "7f58a893-f4aa-483f-9e6f-13c466c5569c",
        "roleTypeId": "1",
        "elementId": "uk-bus_NameThirdPartyAgent",
        "parentId": null,
        "order": "0"
    },
    {
        "id": "a49d6b81-2a17-4533-af29-4d778f34f161",
        "roleTypeId": "1",
        "elementId": "uk-bus_DimensionsParent-ThirdPartyAgents",
        "parentId": "7f58a893-f4aa-483f-9e6f-13c466c5569c",
        "order": "2"
    },
    {
        "id": "0703b16b-c51c-485f-845f-7c830ade102c",
        "roleTypeId": "1",
        "elementId": "uk-bus_ThirdPartyAgentsHypercube",
        "parentId": "a49d6b81-2a17-4533-af29-4d778f34f161",
        "order": "1"
    },
    {
        "id": "c754e96a-e3b3-4832-b362-4c7f66e5881e",
        "roleTypeId": "1",
        "elementId": "uk-bus_ThirdPartyAgentTypeDimension",
        "parentId": "0703b16b-c51c-485f-845f-7c830ade102c",
        "order": "1"
    },
    {
        "id": "764cd98d-6c25-428a-b55c-9a8f9d7fe1bd",
        "roleTypeId": "1",
        "elementId": "uk-bus_DimensionMembersIdentifyingTypeThirdPartyAgentHeading",
        "parentId": "c754e96a-e3b3-4832-b362-4c7f66e5881e",
        "order": "1"
    },
    {
        "id": "64f64554-78a6-4fe7-8779-03b52bac4e1d",
        "roleTypeId": "1",
        "elementId": "uk-bus_EntityAccountantsOrAuditors",
        "parentId": "764cd98d-6c25-428a-b55c-9a8f9d7fe1bd",
        "order": "1"
    },
    {
        "id": "f07fedf6-ca4c-414d-bebd-34b9b942d54e",
        "roleTypeId": "1",
        "elementId": "uk-bus_EntityBankers",
        "parentId": "764cd98d-6c25-428a-b55c-9a8f9d7fe1bd",
        "order": "2"
    },
    {
        "id": "f58cf7be-00e6-475a-9a95-32279eb4e198",
        "roleTypeId": "1",
        "elementId": "uk-bus_EntityLawyersOrLegalAdvisers",
        "parentId": "764cd98d-6c25-428a-b55c-9a8f9d7fe1bd",
        "order": "3"
    },
    {
        "id": "ad686d1b-58c8-4430-9bb5-a0cde69ba06f",
        "roleTypeId": "1",
        "elementId": "uk-bus_EntityPublicRelationsAdvisers",
        "parentId": "764cd98d-6c25-428a-b55c-9a8f9d7fe1bd",
        "order": "4"
    },
    {
        "id": "0151e390-be9c-47dd-a32b-a7ae26eba05a",
        "roleTypeId": "1",
        "elementId": "uk-bus_EntityRegistrationAgents",
        "parentId": "764cd98d-6c25-428a-b55c-9a8f9d7fe1bd",
        "order": "5"
    },
    {
        "id": "296c2603-4de6-4cee-8010-ece9bee241ea",
        "roleTypeId": "1",
        "elementId": "uk-bus_EntityUnderwriters",
        "parentId": "764cd98d-6c25-428a-b55c-9a8f9d7fe1bd",
        "order": "6"
    },
    {
        "id": "b3be5dad-7687-4681-86aa-2dae0530daee",
        "roleTypeId": "1",
        "elementId": "uk-bus_AdministratorsForEntity",
        "parentId": "764cd98d-6c25-428a-b55c-9a8f9d7fe1bd",
        "order": "7"
    },
    {
        "id": "b934dab3-4385-4b15-aa4c-c677a2329605",
        "roleTypeId": "1",
        "elementId": "uk-bus_ReceiversForEntity",
        "parentId": "764cd98d-6c25-428a-b55c-9a8f9d7fe1bd",
        "order": "8"
    },
    {
        "id": "c7bace7c-a6d7-4fbd-8176-761b8bf48aeb",
        "roleTypeId": "1",
        "elementId": "uk-bus_ThirdPartyAgentStatusDimension",
        "parentId": "0703b16b-c51c-485f-845f-7c830ade102c",
        "order": "2"
    },
    {
        "id": "ebe38c37-be0d-4a3f-ba71-ddf269673b61",
        "roleTypeId": "1",
        "elementId": "uk-bus_TotalAgentsDefault",
        "parentId": "c7bace7c-a6d7-4fbd-8176-761b8bf48aeb",
        "order": "1"
    },
    {
        "id": "cdf78444-3277-4b65-89de-cbcc7313c6d6",
        "roleTypeId": "1",
        "elementId": "uk-bus_PrincipalAgent",
        "parentId": "ebe38c37-be0d-4a3f-ba71-ddf269673b61",
        "order": "1"
    },
    {
        "id": "acd55787-e17e-4c8b-abb7-ecb0e356e3c5",
        "roleTypeId": "1",
        "elementId": "uk-bus_JointAgent1",
        "parentId": "ebe38c37-be0d-4a3f-ba71-ddf269673b61",
        "order": "2"
    },
    {
        "id": "45239899-f5f5-47db-8f56-dc6d58057cc4",
        "roleTypeId": "1",
        "elementId": "uk-bus_JointAgent2",
        "parentId": "ebe38c37-be0d-4a3f-ba71-ddf269673b61",
        "order": "3"
    },
    {
        "id": "a8a4a954-1945-4169-a5e8-5969ba738802",
        "roleTypeId": "1",
        "elementId": "uk-bus_JointAgent3",
        "parentId": "ebe38c37-be0d-4a3f-ba71-ddf269673b61",
        "order": "4"
    },
    {
        "id": "d0a51d50-f318-48f0-b929-24402d072840",
        "roleTypeId": "1",
        "elementId": "uk-bus_TotalAgentsDefault",
        "parentId": "c7bace7c-a6d7-4fbd-8176-761b8bf48aeb",
        "order": "2"
    },
    {
        "id": "ab86f9c2-8fa2-4f65-bb64-86c7af59c8be",
        "roleTypeId": "1",
        "elementId": "uk-bus_PrincipalAgent",
        "parentId": "d0a51d50-f318-48f0-b929-24402d072840",
        "order": "1"
    },
    {
        "id": "de8c586b-95fe-4fe5-8eff-293e84829bbe",
        "roleTypeId": "1",
        "elementId": "uk-bus_JointAgent1",
        "parentId": "d0a51d50-f318-48f0-b929-24402d072840",
        "order": "2"
    },
    {
        "id": "e5be543a-c0cb-41e1-b8c3-5643d8ebc90b",
        "roleTypeId": "1",
        "elementId": "uk-bus_JointAgent2",
        "parentId": "d0a51d50-f318-48f0-b929-24402d072840",
        "order": "3"
    },
    {
        "id": "022ab3d2-a782-4009-a0fc-05b60ec64785",
        "roleTypeId": "1",
        "elementId": "uk-bus_JointAgent3",
        "parentId": "d0a51d50-f318-48f0-b929-24402d072840",
        "order": "4"
    },
    {
        "id": "2084b1ab-04ef-43cc-903c-61dc336eab40",
        "roleTypeId": "1",
        "elementId": "uk-bus_FormContactDimension",
        "parentId": "0703b16b-c51c-485f-845f-7c830ade102c",
        "order": "3"
    },
    {
        "id": "1bcf198c-8866-4cf1-abcc-d1d7ecc559aa",
        "roleTypeId": "1",
        "elementId": "uk-bus_DimensionMembersIdentifyingFormContactHeading",
        "parentId": "2084b1ab-04ef-43cc-903c-61dc336eab40",
        "order": "1"
    },
    {
        "id": "90d625f5-9775-42ce-88b6-452bb2f42d9f",
        "roleTypeId": "1",
        "elementId": "uk-bus_MainFormContactDefault",
        "parentId": "1bcf198c-8866-4cf1-abcc-d1d7ecc559aa",
        "order": "1"
    },
    {
        "id": "e3e5bcf6-5914-4178-a452-6a654e4c8d52",
        "roleTypeId": "1",
        "elementId": "uk-bus_Direct",
        "parentId": "1bcf198c-8866-4cf1-abcc-d1d7ecc559aa",
        "order": "2"
    },
    {
        "id": "efdf7d80-bc75-49fb-94dd-ad2c830622a6",
        "roleTypeId": "1",
        "elementId": "uk-bus_Switchboard",
        "parentId": "1bcf198c-8866-4cf1-abcc-d1d7ecc559aa",
        "order": "3"
    },
    {
        "id": "0c235895-935d-44ee-8f85-cb276dda8aa4",
        "roleTypeId": "1",
        "elementId": "uk-bus_Office",
        "parentId": "1bcf198c-8866-4cf1-abcc-d1d7ecc559aa",
        "order": "4"
    },
    {
        "id": "b54b1604-f0c4-40e2-bb59-ebc9baa4ed91",
        "roleTypeId": "1",
        "elementId": "uk-bus_Personal",
        "parentId": "1bcf198c-8866-4cf1-abcc-d1d7ecc559aa",
        "order": "5"
    },
    {
        "id": "97a1d7d7-f7af-46b9-beeb-7588c33cafdd",
        "roleTypeId": "1",
        "elementId": "uk-bus_Home",
        "parentId": "1bcf198c-8866-4cf1-abcc-d1d7ecc559aa",
        "order": "6"
    },
    {
        "id": "a9dfee6b-fb4d-494c-9313-a4363ac03828",
        "roleTypeId": "1",
        "elementId": "uk-bus_Day",
        "parentId": "1bcf198c-8866-4cf1-abcc-d1d7ecc559aa",
        "order": "7"
    },
    {
        "id": "91ef51fc-1f59-4d05-a88b-8fb45f813f30",
        "roleTypeId": "1",
        "elementId": "uk-bus_Night",
        "parentId": "1bcf198c-8866-4cf1-abcc-d1d7ecc559aa",
        "order": "8"
    },
    {
        "id": "b49909ff-c071-4982-b90f-06b61a1ae4fa",
        "roleTypeId": "1",
        "elementId": "uk-bus_Emergency",
        "parentId": "1bcf198c-8866-4cf1-abcc-d1d7ecc559aa",
        "order": "9"
    },
    {
        "id": "e1b9385e-6aed-48ee-8199-5e2a4fb6dd43",
        "roleTypeId": "1",
        "elementId": "uk-bus_AlternativeFormContact1",
        "parentId": "1bcf198c-8866-4cf1-abcc-d1d7ecc559aa",
        "order": "10"
    },
    {
        "id": "43ff2893-4666-49e6-a88a-f22dd9332dff",
        "roleTypeId": "1",
        "elementId": "uk-bus_AlternativeFormContact2",
        "parentId": "1bcf198c-8866-4cf1-abcc-d1d7ecc559aa",
        "order": "11"
    },
    {
        "id": "9df9066d-b2c3-4829-8506-a971c7a9d23f",
        "roleTypeId": "1",
        "elementId": "uk-bus_AlternativeFormContact3",
        "parentId": "1bcf198c-8866-4cf1-abcc-d1d7ecc559aa",
        "order": "12"
    },
    {
        "id": "cf499802-2eeb-4265-bddb-f1813439686c",
        "roleTypeId": "1",
        "elementId": "uk-bus_MainFormContactDefault",
        "parentId": "2084b1ab-04ef-43cc-903c-61dc336eab40",
        "order": "2"
    },
    {
        "id": "ea90705d-67b6-498c-be6b-bea1300290f9",
        "roleTypeId": "1",
        "elementId": "uk-bus_AddressTypeDimension",
        "parentId": "0703b16b-c51c-485f-845f-7c830ade102c",
        "order": "4"
    },
    {
        "id": "4164de59-a397-407e-9575-ed35071e7410",
        "roleTypeId": "1",
        "elementId": "uk-bus_DimensionMembersIdentifyingTypeAddressHeading",
        "parentId": "ea90705d-67b6-498c-be6b-bea1300290f9",
        "order": "1"
    },
    {
        "id": "205cd034-480b-42fc-84c1-d69a79107045",
        "roleTypeId": "1",
        "elementId": "uk-bus_MainAddressDefault",
        "parentId": "4164de59-a397-407e-9575-ed35071e7410",
        "order": "1"
    },
    {
        "id": "7c63e608-ef44-4c29-aeaa-2797d934dee2",
        "roleTypeId": "1",
        "elementId": "uk-bus_Postal",
        "parentId": "4164de59-a397-407e-9575-ed35071e7410",
        "order": "2"
    },
    {
        "id": "1072d7ff-81d5-422e-8f6f-cabf2a7a30ff",
        "roleTypeId": "1",
        "elementId": "uk-bus_Street",
        "parentId": "4164de59-a397-407e-9575-ed35071e7410",
        "order": "3"
    },
    {
        "id": "afdf0c7d-37dc-49b3-a188-c9f098c1b21f",
        "roleTypeId": "1",
        "elementId": "uk-bus_MainAddressDefault",
        "parentId": "ea90705d-67b6-498c-be6b-bea1300290f9",
        "order": "2"
    },
    {
        "id": "28cb98dd-c972-4a3b-a59e-7959e27edcba",
        "roleTypeId": "1",
        "elementId": "uk-bus_PhoneNumberTypeDimension",
        "parentId": "0703b16b-c51c-485f-845f-7c830ade102c",
        "order": "5"
    },
    {
        "id": "563d5694-c9f9-4f69-bea4-758d381f60c4",
        "roleTypeId": "1",
        "elementId": "uk-bus_DimensionMembersIdentifyingTypePhoneNumberHeading",
        "parentId": "28cb98dd-c972-4a3b-a59e-7959e27edcba",
        "order": "1"
    },
    {
        "id": "d6d797e8-5d7d-4506-9eef-fdbecbbdd3eb",
        "roleTypeId": "1",
        "elementId": "uk-bus_Landline",
        "parentId": "563d5694-c9f9-4f69-bea4-758d381f60c4",
        "order": "1"
    },
    {
        "id": "f63c16c6-d2f0-4f18-9523-d35bf8bc6fe7",
        "roleTypeId": "1",
        "elementId": "uk-bus_Mobile",
        "parentId": "563d5694-c9f9-4f69-bea4-758d381f60c4",
        "order": "2"
    },
    {
        "id": "ae06f8a4-2816-425c-8f90-cdd839919ec9",
        "roleTypeId": "1",
        "elementId": "uk-bus_Fax",
        "parentId": "563d5694-c9f9-4f69-bea4-758d381f60c4",
        "order": "3"
    },
    {
        "id": "37ad1f66-c7b8-4cdf-bc93-b229b2522a2d",
        "roleTypeId": "1",
        "elementId": "uk-common_NotApplicable",
        "parentId": "563d5694-c9f9-4f69-bea4-758d381f60c4",
        "order": "4"
    },
    {
        "id": "974669dd-b8a7-4f4e-bf52-21275c080387",
        "roleTypeId": "1",
        "elementId": "uk-common_NotApplicable",
        "parentId": "28cb98dd-c972-4a3b-a59e-7959e27edcba",
        "order": "2"
    },
    {
        "id": "f3fea58c-5949-4a52-85da-d9550f60c368",
        "roleTypeId": "1",
        "elementId": "uk-countries_CountriesDimension",
        "parentId": "0703b16b-c51c-485f-845f-7c830ade102c",
        "order": "6"
    },
    {
        "id": "dc8c9ff9-f913-4408-a629-5a07a9e9e38f",
        "roleTypeId": "1",
        "elementId": "uk-countries_DimensionMembersRepresentingCountriesRegionsHeading",
        "parentId": "f3fea58c-5949-4a52-85da-d9550f60c368",
        "order": "1"
    },
    {
        "id": "f79ddcd6-5b86-43f6-954b-4a53f8839fe3",
        "roleTypeId": "1",
        "elementId": "uk-countries_AllCountries",
        "parentId": "dc8c9ff9-f913-4408-a629-5a07a9e9e38f",
        "order": "1"
    },
    {
        "id": "1aab537b-ad62-4c51-8d0c-52b88274f640",
        "roleTypeId": "1",
        "elementId": "uk-countries_HomeCountriesHeading",
        "parentId": "dc8c9ff9-f913-4408-a629-5a07a9e9e38f",
        "order": "2"
    },
    {
        "id": "720a8f8e-5541-4e1f-8352-a9ff1bd4098d",
        "roleTypeId": "1",
        "elementId": "uk-countries_MainRegionsHeading",
        "parentId": "dc8c9ff9-f913-4408-a629-5a07a9e9e38f",
        "order": "3"
    },
    {
        "id": "f107536b-7719-4e7c-93d2-efd295649df4",
        "roleTypeId": "1",
        "elementId": "uk-countries_CountryListHeading",
        "parentId": "dc8c9ff9-f913-4408-a629-5a07a9e9e38f",
        "order": "4"
    },
    {
        "id": "2ae1190c-f8ac-4234-932e-de29078b2d79",
        "roleTypeId": "1",
        "elementId": "uk-common_NotApplicable",
        "parentId": "dc8c9ff9-f913-4408-a629-5a07a9e9e38f",
        "order": "5"
    },
    {
        "id": "44d625fa-a037-4dab-9bc2-14e1df154857",
        "roleTypeId": "1",
        "elementId": "uk-common_NotApplicable",
        "parentId": "f3fea58c-5949-4a52-85da-d9550f60c368",
        "order": "2"
    },
    {
        "id": "5bd1ba06-5114-4bac-a62c-e5344e890677",
        "roleTypeId": "1",
        "elementId": "uk-lang_LanguagesDimension",
        "parentId": "0703b16b-c51c-485f-845f-7c830ade102c",
        "order": "7"
    },
    {
        "id": "e40df963-dd12-45fd-b094-78e4c3179571",
        "roleTypeId": "1",
        "elementId": "uk-lang_DimensionMembersRepresentingLanguagesHeading",
        "parentId": "5bd1ba06-5114-4bac-a62c-e5344e890677",
        "order": "1"
    },
    {
        "id": "21454080-dbb1-4fe5-bc12-07bbe0633f7a",
        "roleTypeId": "1",
        "elementId": "uk-lang_English",
        "parentId": "e40df963-dd12-45fd-b094-78e4c3179571",
        "order": "1"
    },
    {
        "id": "6134a967-dc8b-4da6-859f-2ac5642eb62e",
        "roleTypeId": "1",
        "elementId": "uk-lang_AllLanguages",
        "parentId": "e40df963-dd12-45fd-b094-78e4c3179571",
        "order": "2"
    },
    {
        "id": "90ca9789-2a71-4dd5-9ab3-653156da6555",
        "roleTypeId": "1",
        "elementId": "uk-lang_LanguageListHeading",
        "parentId": "e40df963-dd12-45fd-b094-78e4c3179571",
        "order": "3"
    },
    {
        "id": "770402f4-f7f9-4160-af64-37050652b78c",
        "roleTypeId": "1",
        "elementId": "uk-common_NotApplicable",
        "parentId": "e40df963-dd12-45fd-b094-78e4c3179571",
        "order": "4"
    },
    {
        "id": "5c9f7e06-3f62-41ea-9cba-386edcd0fec5",
        "roleTypeId": "1",
        "elementId": "uk-common_NotApplicable",
        "parentId": "5bd1ba06-5114-4bac-a62c-e5344e890677",
        "order": "2"
    },
    {
        "id": "f9afe8f6-f413-4403-9391-8a3937218355",
        "roleTypeId": "1",
        "elementId": "uk-gaap_GroupCompanyDimension",
        "parentId": "0703b16b-c51c-485f-845f-7c830ade102c",
        "order": "8"
    },
    {
        "id": "1d910116-b442-471a-8d80-a2f62b326bb2",
        "roleTypeId": "1",
        "elementId": "uk-gaap_Consolidated",
        "parentId": "f9afe8f6-f413-4403-9391-8a3937218355",
        "order": "1"
    },
    {
        "id": "dafea747-21fc-4b97-8f60-9de2e516eb1a",
        "roleTypeId": "1",
        "elementId": "uk-gaap_CompanyDefault",
        "parentId": "1d910116-b442-471a-8d80-a2f62b326bb2",
        "order": "1"
    },
    {
        "id": "beed807f-a01e-401d-bf84-e7e109c2ecc7",
        "roleTypeId": "1",
        "elementId": "uk-gaap_GroupShareJoint-venturesExcludingAssociatesTurnoverOnly",
        "parentId": "1d910116-b442-471a-8d80-a2f62b326bb2",
        "order": "1"
    },
    {
        "id": "99f2f33c-849d-494e-8a6b-cdb1dc019766",
        "roleTypeId": "1",
        "elementId": "uk-gaap_ShareJoint-venturesAssociates",
        "parentId": "1d910116-b442-471a-8d80-a2f62b326bb2",
        "order": "2"
    },
    {
        "id": "5e8592f4-d183-4de4-95ac-381363b33a2a",
        "roleTypeId": "1",
        "elementId": "uk-gaap_ShareJoint-ventures",
        "parentId": "1d910116-b442-471a-8d80-a2f62b326bb2",
        "order": "3"
    },
    {
        "id": "83782108-42df-4028-af7b-4adc6eed273a",
        "roleTypeId": "1",
        "elementId": "uk-gaap_GroupAfterAssociatesBeforeJoint-ventures",
        "parentId": "1d910116-b442-471a-8d80-a2f62b326bb2",
        "order": "4"
    },
    {
        "id": "cf7ae333-8096-4caa-b9f1-2bbda3a1348f",
        "roleTypeId": "1",
        "elementId": "uk-gaap_ShareAssociates",
        "parentId": "1d910116-b442-471a-8d80-a2f62b326bb2",
        "order": "5"
    },
    {
        "id": "d1bf0ffb-82a4-43c9-8470-eab7ed82d61d",
        "roleTypeId": "1",
        "elementId": "uk-gaap_GroupBeforeAssociatesJoint-ventures",
        "parentId": "1d910116-b442-471a-8d80-a2f62b326bb2",
        "order": "6"
    },
    {
        "id": "c76c605b-dbca-4022-b08d-12a8913d8338",
        "roleTypeId": "1",
        "elementId": "uk-gaap_CompanyDefault",
        "parentId": "1d910116-b442-471a-8d80-a2f62b326bb2",
        "order": "7"
    },
    {
        "id": "d2932069-fabb-43cb-8b16-0e20d5d32aff",
        "roleTypeId": "1",
        "elementId": "uk-gaap_CompanyDefault",
        "parentId": "f9afe8f6-f413-4403-9391-8a3937218355",
        "order": "2"
    },
    {
        "id": "cabc0e96-8eb1-4c95-9beb-c6f2bb1142c5",
        "roleTypeId": "1",
        "elementId": "uk-gaap_RestatementsDimension",
        "parentId": "0703b16b-c51c-485f-845f-7c830ade102c",
        "order": "9"
    },
    {
        "id": "e4617dbf-de7d-4eae-af43-fd5c99216f31",
        "roleTypeId": "1",
        "elementId": "uk-gaap_RestatedAmount",
        "parentId": "cabc0e96-8eb1-4c95-9beb-c6f2bb1142c5",
        "order": "1"
    },
    {
        "id": "009d3bdb-e8cb-43ec-9fdb-072b28277d9e",
        "roleTypeId": "1",
        "elementId": "uk-gaap_PriorPeriodIncreaseDecrease",
        "parentId": "e4617dbf-de7d-4eae-af43-fd5c99216f31",
        "order": "1"
    },
    {
        "id": "9ab7097b-fbe6-4b11-9eae-cfd25304fa56",
        "roleTypeId": "1",
        "elementId": "uk-gaap_OriginalAmountDefault",
        "parentId": "e4617dbf-de7d-4eae-af43-fd5c99216f31",
        "order": "2"
    },
    {
        "id": "d84c7414-2893-48bf-970d-5ee1e97f4cfa",
        "roleTypeId": "1",
        "elementId": "uk-gaap_OriginalAmountDefault",
        "parentId": "cabc0e96-8eb1-4c95-9beb-c6f2bb1142c5",
        "order": "2"
    }
];