import { db } from "./database/db.js";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.

// resolver
const resolvers = {
  Query: {
      // a. return distinct values of a column
      defendTacticIds: () => db.prepare(
          "SELECT DISTINCT defend_tac_ID defendTacId " +
          "FROM Defend_Tactic " +
          "ORDER BY defendTacId"
      ).all(),

      defendTacticNames: () => db.prepare(
          "SELECT DISTINCT defend_tac_name defendTacName " +
          "FROM Defend_Tactic " +
          "ORDER BY defendTacName"
      ).all(),

      defendTechniqueIds: () => db.prepare(
          "SELECT DISTINCT defend_t_ID defendTId " +
          "FROM Defend_Technique " +
          "ORDER BY defendTId"
      ).all(),

      defendTechniqueNames: () => db.prepare(
          "SELECT DISTINCT defend_t_name defendTName " +
          "FROM Defend_Technique " +
          "ORDER BY defendTName"
      ).all(),

      attackTacticIds: () => db.prepare(
          "SELECT DISTINCT attack_tac_ID attackTacId " +
          "FROM Attack_Tactic " +
          "ORDER BY attackTacId"
      ).all(),

      attackTacticNames: () => db.prepare(
          "SELECT DISTINCT attack_tac_name attackTacName " +
          "FROM Attack_Tactic " +
          "ORDER BY attackTacName"
      ).all(),

      attackTechniqueIds: () => db.prepare(
          "SELECT DISTINCT attack_t_ID attackTId " +
          "FROM Attack_Technique " +
          "ORDER BY attackTId"
      ).all(),

      attackTechniqueNames: () => db.prepare(
          "SELECT DISTINCT attack_t_name attackTName " +
          "FROM Attack_Technique " +
          "ORDER BY attackTName"
      ).all(),

      // b. return detailed info given an ID
      getDefendTacticId: (_, args) => db.prepare(
          "SELECT defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_tac_matrix_version defendTacMatrixVersion " +
          "FROM Defend_Tactic " +
          "WHERE defend_tac_ID  = ?"
      ).get(args.defendTacId),

      getDefendTacticName: (_, args) => db.prepare(
          "SELECT defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_tac_matrix_version defendTacMatrixVersion " +
          "FROM Defend_Tactic " +
          "WHERE defend_tac_name  = ?"
      ).get(args.defendTacName),

      getDefendTechniqueId: (_, args) => db.prepare(
          "SELECT defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_t_matrix_version defendTMatrixVersion " +
          "FROM Defend_Technique " +
          "WHERE defend_t_ID  = ?"
      ).get(args.defendTId),

      getDefendTechniqueName: (_, args) => db.prepare(
          "SELECT defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_t_matrix_version defendTMatrixVersion " +
          "FROM Defend_Technique " +
          "WHERE defend_t_name  = ?"
      ).get(args.defendTName),

      getAttackTacticId: (_, args) => db.prepare(
          "SELECT attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_tac_matrix_version attackTacMatrixVersion " +
          "FROM Attack_Tactic " +
          "WHERE attack_tac_ID  = ?"
      ).get(args.attackTacId),

      getAttackTacticName: (_, args) => db.prepare(
          "SELECT defend_tac_ID defendTacId, defend_tac_name defendTacName, attack_tac_desc attackTacDesc, attack_tac_matrix_version attackTacMatrixVersion " +
          "FROM Attack_Tactic " +
          "WHERE attack_tac_name  = ?"
      ).get(args.attackTacName),

      getAttackTechniqueId: (_, args) => db.prepare(
          "SELECT attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_t_data_sources attackTDataSources, attack_t_permission_required attackTPermissionRequired, attack_t_system_requirements attackTSystemRequirements, attack_t_matrix_version attackTMatrixVersion " +
          "FROM Attack_Technique " +
          "WHERE attack_t_ID  = ?"
      ).get(args.attackTId),

      getAttackTechniqueName: (_, args) => db.prepare(
          "SELECT attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_t_data_sources attackTDataSources, attack_t_permission_required attackTPermissionRequired, attack_t_system_requirements attackTSystemRequirements, attack_t_matrix_version attackTMatrixVersion " +
          "FROM Attack_Technique " +
          "WHERE attack_t_name  = ?"
      ).get(args.attackTName),

      // c. all mapping (db) filtering based on given column
      csfFunctionId: (_, args) => db.prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_matrix_version defendMatrixVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_matrix_version attackMatrixVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version, sp800171_c_ID sp800171CId, sp800171_c_family sp800171CFamily, sp800171_c_type sp800171CType, sp800171_c_content sp800171CContent, sp800171_c_discussion sp800171CDiscussion, sp800171_version sp800171Version " +
          "FROM AllMappingDetail " +
          "WHERE csf_f_ID = ? "
      ).all(args.csfFId),

      csfFunctionName: (_, args) => db.prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_matrix_version defendMatrixVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_matrix_version attackMatrixVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version, sp800171_c_ID sp800171CId, sp800171_c_family sp800171CFamily, sp800171_c_type sp800171CType, sp800171_c_content sp800171CContent, sp800171_c_discussion sp800171CDiscussion, sp800171_version sp800171Version " +
          "FROM AllMappingDetail " +
          "WHERE csf_f_name = ? "
      ).all(args.csfFName),

      csfCategoryId: (_, args) => db.prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_matrix_version defendMatrixVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_matrix_version attackMatrixVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version, sp800171_c_ID sp800171CId, sp800171_c_family sp800171CFamily, sp800171_c_type sp800171CType, sp800171_c_content sp800171CContent, sp800171_c_discussion sp800171CDiscussion, sp800171_version sp800171Version " +
          "FROM AllMappingDetail " +
          "WHERE csf_c_ID = ? "
      ).all(args.csfCId),

      csfCategoryName: (_, args) => db.prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_matrix_version defendMatrixVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_matrix_version attackMatrixVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version, sp800171_c_ID sp800171CId, sp800171_c_family sp800171CFamily, sp800171_c_type sp800171CType, sp800171_c_content sp800171CContent, sp800171_c_discussion sp800171CDiscussion, sp800171_version sp800171Version " +
          "FROM AllMappingDetail " +
          "WHERE csf_c_name = ? "
      ).all(args.csfCName),

      csfSubcategoryId: (_, args) => db.prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_matrix_version defendMatrixVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_matrix_version attackMatrixVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version, sp800171_c_ID sp800171CId, sp800171_c_family sp800171CFamily, sp800171_c_type sp800171CType, sp800171_c_content sp800171CContent, sp800171_c_discussion sp800171CDiscussion, sp800171_version sp800171Version " +
          "WHERE csf_s_ID = ? "
      ).all(args.csfSId),

      sp80053ControlId: (_, args) => db.prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_matrix_version defendMatrixVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_matrix_version attackMatrixVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version, sp800171_c_ID sp800171CId, sp800171_c_family sp800171CFamily, sp800171_c_type sp800171CType, sp800171_c_content sp800171CContent, sp800171_c_discussion sp800171CDiscussion, sp800171_version sp800171Version " +
          "FROM AllMappingDetail " +
          "WHERE sp80053_c_ID = ? "
      ).all(args.sp80053CId),

      sp80053ControlName: (_, args) => db.prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_matrix_version defendMatrixVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_matrix_version attackMatrixVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version, sp800171_c_ID sp800171CId, sp800171_c_family sp800171CFamily, sp800171_c_type sp800171CType, sp800171_c_content sp800171CContent, sp800171_c_discussion sp800171CDiscussion, sp800171_version sp800171Version " +
          "FROM AllMappingDetail " +
          "WHERE sp80053_c_name = ? "
      ).all(args.sp80053CName),

      defendTacticId: (_, args) => db.prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_matrix_version defendMatrixVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_matrix_version attackMatrixVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version, sp800171_c_ID sp800171CId, sp800171_c_family sp800171CFamily, sp800171_c_type sp800171CType, sp800171_c_content sp800171CContent, sp800171_c_discussion sp800171CDiscussion, sp800171_version sp800171Version " +
          "FROM AllMappingDetail " +
          "WHERE defend_tac_ID = ? "
      ).all(args.defendTacId),

      defendTacticName: (_, args) => db.prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_matrix_version defendMatrixVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_matrix_version attackMatrixVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version, sp800171_c_ID sp800171CId, sp800171_c_family sp800171CFamily, sp800171_c_type sp800171CType, sp800171_c_content sp800171CContent, sp800171_c_discussion sp800171CDiscussion, sp800171_version sp800171Version " +
          "FROM AllMappingDetail " +
          "WHERE defend_tac_name = ? "
      ).all(args.defendTacName),

      defendTechniqueId: (_, args) => db.prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_matrix_version defendMatrixVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_matrix_version attackMatrixVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version, sp800171_c_ID sp800171CId, sp800171_c_family sp800171CFamily, sp800171_c_type sp800171CType, sp800171_c_content sp800171CContent, sp800171_c_discussion sp800171CDiscussion, sp800171_version sp800171Version " +
          "FROM AllMappingDetail " +
          "WHERE defend_t_ID = ? "
      ).all(args.defendTId),

      defendTechniqueName: (_, args) => db.prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_matrix_version defendMatrixVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_matrix_version attackMatrixVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version, sp800171_c_ID sp800171CId, sp800171_c_family sp800171CFamily, sp800171_c_type sp800171CType, sp800171_c_content sp800171CContent, sp800171_c_discussion sp800171CDiscussion, sp800171_version sp800171Version " +
          "FROM AllMappingDetail " +
          "WHERE defend_t_name = ? "
      ).all(args.defendTName),

      attackTacticId: (_, args) => db.prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_matrix_version defendMatrixVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_matrix_version attackMatrixVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version, sp800171_c_ID sp800171CId, sp800171_c_family sp800171CFamily, sp800171_c_type sp800171CType, sp800171_c_content sp800171CContent, sp800171_c_discussion sp800171CDiscussion, sp800171_version sp800171Version " +
          "FROM AllMappingDetail " +
          "WHERE attack_tac_ID = ? "
      ).all(args.attackTacId),

      attackTacticName: (_, args) => db.prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_matrix_version defendMatrixVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_matrix_version attackMatrixVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version, sp800171_c_ID sp800171CId, sp800171_c_family sp800171CFamily, sp800171_c_type sp800171CType, sp800171_c_content sp800171CContent, sp800171_c_discussion sp800171CDiscussion, sp800171_version sp800171Version " +
          "FROM AllMappingDetail " +
          "WHERE attack_tac_name = ? "
      ).all(args.attackTacName),

      attackTechniqueId: (_, args) => db.prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_matrix_version defendMatrixVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_matrix_version attackMatrixVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version, sp800171_c_ID sp800171CId, sp800171_c_family sp800171CFamily, sp800171_c_type sp800171CType, sp800171_c_content sp800171CContent, sp800171_c_discussion sp800171CDiscussion, sp800171_version sp800171Version " +
          "FROM AllMappingDetail " +
          "WHERE attack_t_ID = ? "
      ).all(args.attackTId),

      attackTechniqueName: (_, args) => db.prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_matrix_version defendMatrixVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_matrix_version attackMatrixVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version, sp800171_c_ID sp800171CId, sp800171_c_family sp800171CFamily, sp800171_c_type sp800171CType, sp800171_c_content sp800171CContent, sp800171_c_discussion sp800171CDiscussion, sp800171_version sp800171Version " +
          "FROM AllMappingDetail " +
          "WHERE attack_t_name = ? "
      ).all(args.attackTName),

      iso27001ControlId: (_, args) => db.prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_matrix_version defendMatrixVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_matrix_version attackMatrixVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version, sp800171_c_ID sp800171CId, sp800171_c_family sp800171CFamily, sp800171_c_type sp800171CType, sp800171_c_content sp800171CContent, sp800171_c_discussion sp800171CDiscussion, sp800171_version sp800171Version " +
          "FROM AllMappingDetail " +
          "WHERE iso27001_c_ID = ? "
      ).all(args.iso27001CId),

      iso27001ControlName: (_, args) => db.prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_matrix_version defendMatrixVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_matrix_version attackMatrixVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version, sp800171_c_ID sp800171CId, sp800171_c_family sp800171CFamily, sp800171_c_type sp800171CType, sp800171_c_content sp800171CContent, sp800171_c_discussion sp800171CDiscussion, sp800171_version sp800171Version " +
          "FROM AllMappingDetail " +
          "WHERE iso27001_c_name = ? "
      ).all(args.iso27001CName),

      sp800171ControlId: (_, args) => db.prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_matrix_version defendMatrixVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_version attackTVersion, attack_t_platforms attackTPlatforms, attack_t_created attackTCreated, attack_t_modified attackTModified, attack_t_bypassed attackTBypassed, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_url attackTUrl, attack_matrix_version attackMatrixVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version, sp800171_c_ID sp800171CId, sp800171_c_family sp800171CFamily, sp800171_c_type sp800171CType, sp800171_c_content sp800171CContent, sp800171_c_discussion sp800171CDiscussion, sp800171_version sp800171Version " +
          "FROM AllMappingDetail " +
          "WHERE sp800171_c_ID = ? "
      ).all(args.sp800171CId),

      // d. Mapping 攻擊手法
      mapAttackIdToCsfSub: (_, args) => db.prepare(
          "SELECT DISTINCT csf_s_ID csfSId " +
          "FROM AllMappingDetail " +
          `WHERE attack_t_ID LIKE '%' || ? || '%'` +
          "ORDER BY csfSId"
      ).all(args.attackTId),

      mapAttackIdToSp80053: (_, args) => db.prepare(
          "SELECT DISTINCT sp80053_c_ID sp80053CId " +
          "FROM AllMappingDetail " +
          `WHERE attack_t_ID LIKE '%' || ? || '%'` +
          "ORDER BY sp80053CId"
      ).all(args.attackTId),

      mapAttackIdToDefend: (_, args) => db.prepare(
          "SELECT DISTINCT defend_t_ID defendTId " +
          "FROM AllMappingDetail " +
          `WHERE attack_t_ID LIKE '%' || ? || '%'` +
          "ORDER BY defendTId"
      ).all(args.attackTId),

      mapAttackIdToIso: (_, args) => db.prepare(
          "SELECT DISTINCT iso27001_c_ID iso27001CId " +
          "FROM AllMappingDetail " +
          `WHERE attack_t_ID LIKE '%' || ? || '%'` +
          "ORDER BY iso27001CId"
      ).all(args.attackTId),

      mapAttackIdToSp800171: (_, args) => db.prepare(
          "SELECT DISTINCT sp800171_c_ID sp800171CId " +
          "FROM AllMappingDetail " +
          `WHERE attack_t_ID LIKE '%' || ? || '%'` +
          "ORDER BY sp800171CId"
      ).all(args.attackTId),
  }
};

export { resolvers };
