import { db } from "./database/db.js";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.

const resolvers = {
  Query: {
    csfFunctionId: (_, args) =>
      db
        .prepare(
          "SELECT csf_f_ID csfFId, csf_f_name csfFName " +
            "FROM AllMapping " +
            "WHERE csf_f_ID = ? "
        )
        .all(args.csfFId),
    csfFunctionName: (_, args) =>
      db
        .prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_version defendVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_label attackTLabel, attack_version attackVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version " +
            "FROM AllMappingDetail " +
            "WHERE csf_f_ID = ? " +
            "FROM AllMappingDetail " +
            "WHERE csf_f_name = ? "
        )
        .all(args.csfFName),
    csfCategoryId: (_, args) =>
      db
        .prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_version defendVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_label attackTLabel, attack_version attackVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version " +
            "FROM AllMappingDetail " +
            "WHERE csf_f_ID = ? " +
            "FROM AllMappingDetail " +
            "WHERE csf_c_ID = ? "
        )
        .all(args.csfCId),
    csfCategoryName: (_, args) =>
      db
        .prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_version defendVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_label attackTLabel, attack_version attackVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version " +
            "FROM AllMappingDetail " +
            "WHERE csf_f_ID = ? " +
            "FROM AllMappingDetail " +
            "WHERE csf_c_name = ? "
        )
        .all(args.csfCName),
    csfSubcategoryId: (_, args) =>
      db
        .prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_version defendVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_label attackTLabel, attack_version attackVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version " +
            "FROM AllMappingDetail " +
            "WHERE csf_f_ID = ? " +
            "FROM AllMappingDetail " +
            "WHERE csf_s_ID = ? "
        )
        .all(args.csfSId),
    sp80053ControlId: (_, args) =>
      db
        .prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_version defendVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_label attackTLabel, attack_version attackVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version " +
            "FROM AllMappingDetail " +
            "WHERE csf_f_ID = ? " +
            "FROM AllMappingDetail " +
            "WHERE sp80053_c_ID = ? "
        )
        .all(args.sp80053CId),
    sp80053ControlName: (_, args) =>
      db
        .prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_version defendVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_label attackTLabel, attack_version attackVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version " +
            "FROM AllMappingDetail " +
            "WHERE csf_f_ID = ? " +
            "FROM AllMappingDetail " +
            "WHERE sp80053_c_name = ? "
        )
        .all(args.sp80053CName),
    defendTacticId: (_, args) =>
      db
        .prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_version defendVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_label attackTLabel, attack_version attackVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version " +
            "FROM AllMappingDetail " +
            "WHERE csf_f_ID = ? " +
            "FROM AllMappingDetail " +
            "WHERE defend_tac_ID = ? "
        )
        .all(args.defendTacId),
    defendTacticName: (_, args) =>
      db
        .prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_version defendVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_label attackTLabel, attack_version attackVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version " +
            "FROM AllMappingDetail " +
            "WHERE csf_f_ID = ? " +
            "FROM AllMappingDetail " +
            "WHERE defend_tac_name = ? "
        )
        .all(args.defendTacName),
    defendTechniqueId: (_, args) =>
      db
        .prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_version defendVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_label attackTLabel, attack_version attackVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version " +
            "FROM AllMappingDetail " +
            "WHERE csf_f_ID = ? " +
            "FROM AllMappingDetail " +
            "WHERE defend_t_ID = ? "
        )
        .all(args.defendTId),
    defendTechniqueName: (_, args) =>
      db
        .prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_version defendVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_label attackTLabel, attack_version attackVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version " +
            "FROM AllMappingDetail " +
            "WHERE csf_f_ID = ? " +
            "FROM AllMappingDetail " +
            "WHERE defend_t_name = ? "
        )
        .all(args.defendTName),

    attackTacticId: (_, args) =>
      db
        .prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_version defendVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_label attackTLabel, attack_version attackVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version " +
            "FROM AllMappingDetail " +
            "WHERE csf_f_ID = ? " +
            "FROM AllMappingDetail " +
            "WHERE attack_tac_ID = ? "
        )
        .all(args.attackTacId),

    attackTacticName: (_, args) =>
      db
        .prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_version defendVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_label attackTLabel, attack_version attackVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version " +
            "FROM AllMappingDetail " +
            "WHERE csf_f_ID = ? " +
            "FROM AllMappingDetail " +
            "WHERE attack_tac_name = ? "
        )
        .all(args.attackTacName),

    attackTechniqueId: (_, args) =>
      db
        .prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_version defendVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_label attackTLabel, attack_version attackVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version " +
            "FROM AllMappingDetail " +
            "WHERE csf_f_ID = ? " +
            "FROM AllMappingDetail " +
            "WHERE attack_t_ID = ? "
        )
        .all(args.attackTId),

    attackTechniqueName: (_, args) =>
      db
        .prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_version defendVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_label attackTLabel, attack_version attackVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version " +
            "FROM AllMappingDetail " +
            "WHERE csf_f_ID = ? " +
            "FROM AllMappingDetail " +
            "WHERE attack_t_name = ? "
        )
        .all(args.attackTName),

    iso27001ControlId: (_, args) =>
      db
        .prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_version defendVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_label attackTLabel, attack_version attackVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version " +
            "FROM AllMappingDetail " +
            "WHERE csf_f_ID = ? " +
            "FROM AllMappingDetail " +
            "WHERE iso27001_c_ID = ? "
        )
        .all(args.iso27001CId),

    iso27001ControlName: (_, args) =>
      db
        .prepare(
          "SELECT ID id, csf_f_ID csfFId, csf_f_name csfFName, csf_c_ID csfCId, csf_c_name csfCName, csf_c_content csfCContent, csf_s_ID csfSId, csf_s_content csfSContent, csf_version csfVersion, sp80053_c_ID sp80053CId, sp80053_c_name sp80053CName, sp80053_c_content sp80053CContent, sp80053_c_discussion sp80053CDiscussion, sp80053_c_label sp80053CLabel, sp80053_c_related sp80053CRelated, sp80053_version sp80053Version, defend_tac_ID defendTacId, defend_tac_name defendTacName, defend_tac_desc defendTacDesc, defend_t_ID defendTId, defend_t_name defendTName, defend_t_desc defendTDesc, defend_t_label defendTLabel, defend_version defendVersion, attack_tac_ID attackTacId, attack_tac_name attackTacName, attack_tac_desc attackTacDesc, attack_t_ID attackTId, attack_t_name attackTName, attack_t_desc attackTDesc, attack_t_detection attackTDetection, attack_t_label attackTLabel, attack_version attackVersion, iso27001_c_ID iso27001CId, iso27001_c_name iso27001CName, iso27001_c_content iso27001CDesc, iso27001_c_label iso27001CLabel, iso27001_version iso27001Version " +
            "FROM AllMappingDetail " +
            "WHERE csf_f_ID = ? " +
            "FROM AllMappingDetail " +
            "WHERE iso27001_c_name = ? "
        )
        .all(args.iso27001CName),
  },
};

export { resolvers };
