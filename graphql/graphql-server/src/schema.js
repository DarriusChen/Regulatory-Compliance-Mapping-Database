import { gql } from 'apollo-server';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// Schema
const typeDefs = gql`
  type AllMappingDetail {
		"ID"
		id: ID

		"csf_f_ID"
		csfFId: String
		"csf_f_name"
		csfFName: String
		"csf_c_ID"
		csfCId: String
		"csf_c_name"
		csfCName: String
		"csf_c_content"
		csfCContent: String
		"csf_s_ID"
		csfSId: String
		"csf_s_content"
		csfSContent: String
		"csf_version"
		csfVersion: String

		"sp80053_c_ID"
		sp80053CId: String
		"sp80053_c_name"
		sp80053CName: String
		"sp80053_c_content"
		sp80053CContent: String
		"sp80053_c_discussion"
		sp80053CDiscussion: String
		"sp80053_c_label"
		sp80053CLabel: String
		"sp80053_c_related"
		sp80053CRelated: String
		"sp80053_version"
		sp80053Version: String

		"defend_tac_ID"
		defendTacId: String
		"defend_tac_name"
		defendTacName: String
		"defend_tac_desc"
		defendTacDesc: String
		"defend_t_ID"
		defendTId: String
		"defend_t_name"
		defendTName: String
		"defend_t_desc"
		defendTDesc: String
		"defend_t_label"
		defendTLabel: String
		"defend_version"
		defendVersion: String

		"attack_tac_ID"
		attackTacId: String
		"attack_tac_name"
		attackTacName: String
		"attack_tac_desc"
		attackTacDesc: String
		"attack_t_ID"
		attackTId: String
		"attack_t_name"
		attackTName: String
		"attack_t_desc"
		attackTDesc: String
		"attack_t_detection"
		attackTDetection: String
		"attack_t_label"
		attackTLabel: String
		"attack_version"
		attackVersion: String
	
		"iso27001_c_ID"
		iso27001CId: String
		"iso27001_c_name"
		iso27001CName: String
		"iso27001_c_content"
		iso27001CDesc: String
		"iso27001_c_label"
		iso27001CLabel: String
		"iso27001_version"
		iso27001Version: String
	}

  type Query {
			csfFunctionId(csfFId: String!): [AllMappingDetail]
			csfFunctionName(csfFName: String!): [AllMappingDetail]
			
			csfCategoryId(csfCId: String!): [AllMappingDetail]
			csfCategoryName(csfCName: String!): [AllMappingDetail]

			csfSubcategoryId(csfSId: String!): [AllMappingDetail]

			sp80053ControlId(sp80053CId: String!): [AllMappingDetail]
			sp80053ControlName(sp80053CName: String!): [AllMappingDetail]

			defendTacticId(defendTacId: String!): [AllMappingDetail]
			defendTacticName(defendTacName: String!): [AllMappingDetail]

			defendTechniqueId(defendTId: String!): [AllMappingDetail]
			defendTechniqueName(defendTName: String!): [AllMappingDetail]

			attackTacticId(attackTacId: String!): [AllMappingDetail]
			attackTacticName(attackTacName: String!): [AllMappingDetail]

			attackTechniqueId(attackTId: String!): [AllMappingDetail]
			attackTechniqueName(attackTName: String!): [AllMappingDetail]

			iso27001ControlId(iso27001CId: String!): [AllMappingDetail]
			iso27001ControlName(iso27001CName: String!): [AllMappingDetail]
  }
`;

export { typeDefs };