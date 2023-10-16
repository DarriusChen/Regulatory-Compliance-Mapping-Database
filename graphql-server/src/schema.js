import { gql } from 'apollo-server';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// Schema
// Schema
const typeDefs = gql`
    type CSF_Function {
        "ID"
        id: ID
        "csf_f_ID"
        csfFId: String
        "csf_f_name"
        csfFName: String
        "csf_f_version"
        csfFVersion: String
    }

    type CSF_Category {
        "ID"
        id: ID
        "csf_c_ID"
        csfCId: String
        "csf_c_name"
        csfCName: String
        "csf_c_content"
        csfCContent: String
        "csf_c_version"
        csfCVersion: String
        "csf_f_ID"
        csfFId: String
    }

    type CSF_Subcategory {
        "ID"
        id: ID
        "csf_s_ID"
        csfSId: String
        "csf_s_content"
        csfSContent: String
        "csf_s_version"
        csfSVersion: String
        "csf_f_ID"
        csfFId: String
        "csf_c_ID"
        csfCId: String
        "sp80053_c_ID"
        sp80053CId: String
    }

    type SP80053_Control {
        "ID"
        id: ID
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
        "sp80053_c_version"
        sp80053CVersion: String
    }

    type Defend_Tactic {
        "ID"
        id: ID
        "defend_tac_ID"
        defendTacId: String
        "defend_tac_name"
        defendTacName: String
        "defend_tac_desc"
        defendTacDesc: String
        "defend_tac_matrix_version"
        defendTacMatrixVersion: String
    }

    type Defend_Technique {
        "ID"
        id: ID
        "defend_t_ID"
        defendTId: String
        "defend_t_name"
        defendTName: String
        "defend_t_desc"
        defendTDesc: String
        "defend_t_label"
        defendTLabel: String
        "defend_t_matrix_version"
        defendTMatrixVersion: String
        "defend_tac_ID"
        defendTacId: String
    }

    type Attack_Tactic {
        "ID"
        id: ID
        "attack_tac_ID"
        attackTacId: String
        "attack_tac_name"
        attackTacName: String
        "attack_tac_desc"
        attackTacDesc: String
        "attack_tac_matrix_version"
        attackTacMatrixVersion: String
    }

    type Attack_Technique {
        "ID"
        id: ID
        "attack_t_ID"
        attackTId: String
        "attack_t_name"
        attackTName: String
        "attack_tac_ID"
        attackTacId: String
        "attack_tac_name"
        attackTacName: String
        "attack_t_version"
        attackTVersion: String
        "attack_t_platforms"
        attackTPlatforms: String
        "attack_t_created"
        attackTCreated: String
        "attack_t_modified"
        attackTModified: String
        "attack_t_bypassed"
        attackTBypassed: String
        "attack_t_desc"
        attackTDesc: String
        "attack_t_detection"
        attackTDetection: String
        "attack_t_url"
        attackTUrl: String
        "attack_t_data_sources"
        attackTDataSources: String
        "attack_t_permission_required"
        attackTPermissionRequired: String
        "attack_t_system_requirements"
        attackTSystemRequirements: String
        "attack_t_matrix_version"
        attackTMatrixVersion: String
    }

    type ISO27001_Control {
        "ID"
        id: ID
        "iso27001_c_ID"
        iso27001CId: String
        "iso27001_c_name"
        iso27001CName: String
        "iso27001_c_content"
        iso27001CDesc: String
        "iso27001_c_label"
        iso27001CLabel: String
        "iso27001_c_version"
        iso27001CVersion: String
    }

    type SP800171_Control {
        "ID"
        id: ID
        "sp800171_c_ID"
        sp800171CId: String
        "sp800171_c_family"
        sp800171CFamily: String
        "sp800171_c_type"
        sp800171CType: String
        "sp800171_c_content"
        sp800171CContent: String
        "sp800171_c_discussion"
        sp800171CDiscussion: String
        "sp800171_c_version"
        sp800171CVersion: String
    }

    type Defend_Attack_Mapping {
        "ID"
        id: ID
        "defend_t_name"
        defendTName: String
        "defend_t_ID"
        defendTId: String
        "defensive_verb"
        defensiveVerb: String
        "defensive_artifact"
        defensiveArtifact: String
        "attack_t_name"
        attackTName: String
        "offensive_verb"
        offensiveVerb: String
        "offensive_artifact"
        offensiveArtifact: String
        "attack_t_ID"
        attackTId: String
    }

    type SP80053_Defend_Mapping {
        "ID"
        id: ID
        "sp80053_c_ID"
        sp80053CId: String
        "relation_label"
        relationLabel: String
        "defend_t_name"
        defendTName: String
        "defend_t_ID"
        defendTId: String
    }

    type SP80053_ISO_Mapping {
        "ID"
        id: ID
        "sp80053_c_ID"
        sp80053CId: String
        "sp80053_c_name"
        sp80053CName: String
        "iso27001_c_ID"
        iso27001CId: String
    }

    type CSF_SP800171_Mapping {
        "ID"
        id: ID
        "csf_s_ID"
        csfSId: String
        "sp800171_c_ID"
        sp800171CId: String
    }

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
        "defend_matrix_version"
        defendMatrixVersion: String

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
        "attack_t_version"
        attackTVersion: String
        "attack_t_platforms"
        attackTPlatforms: String
        "attack_t_created"
        attackTCreated: String
        "attack_t_modified"
        attackTModified: String
        "attack_t_bypassed"
        attackTBypassed: String
        "attack_t_desc"
        attackTDesc: String
        "attack_t_detection"
        attackTDetection: String
        "attack_t_url"
        attackTUrl: String
        "attack_matrix_version"
        attackMatrixVersion: String

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

        "sp800171_c_ID"
        sp800171CId: String
        "sp800171_c_family"
        sp800171CFamily: String
        "sp800171_c_type"
        sp800171CType: String
        "sp800171_c_content"
        sp800171CContent: String
        "sp800171_c_discussion"
        sp800171CDiscussion: String
        "sp800171_version"
        sp800171Version: String
    }

    type Query {
        defendTacticIds: [Defend_Tactic]
        defendTacticNames: [Defend_Tactic]
        defendTechniqueIds: [Defend_Technique]
        defendTechniqueNames: [Defend_Technique]

        attackTacticIds: [Attack_Tactic]
        attackTacticNames: [Attack_Tactic]
        attackTechniqueIds: [Attack_Technique]
        attackTechniqueNames: [Attack_Technique]


        getDefendTacticId(defendTacId: String!): Defend_Tactic
        getDefendTacticName(defendTacName: String!): Defend_Tactic
        getDefendTechniqueId(defendTId: String!): Defend_Technique
        getDefendTechniqueName(defendTName: String!): Defend_Technique

        getAttackTacticId(attackTacId: String!): Attack_Tactic
        getAttackTacticName(attackTacName: String!): Attack_Tactic
        getAttackTechniqueId(attackTId: String!): Attack_Technique
        getAttackTechniqueName(attackTName: String!): Attack_Technique


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

        sp800171ControlId(sp800171CId: String!): [AllMappingDetail]

        mapAttackIdToCsfSub(attackTId: String!): [AllMappingDetail]
        mapAttackIdToSp80053(attackTId: String!): [AllMappingDetail]
        mapAttackIdToDefend(attackTId: String!): [AllMappingDetail]
        mapAttackIdToIso(attackTId: String!): [AllMappingDetail]
        mapAttackIdToSp800171(attackTId: String!): [AllMappingDetail]
    }
`;

export { typeDefs };