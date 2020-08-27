const CONSTANTS = {
  DATATABLE: {
    PAGE_SIZES: [25, 50, 75, 100],
    PAGE_SIZE: 25
  },
  ENUM: {
    MEMBER_TITLE: ["Mr.", "Mrs.", "Ms.", "Miss"],
    TIER_QUALIFICATION_STATUS: [{
        name: "Active",
        value: "active"
      },
      {
        name: "Draft",
        value: "draft"
      },
      {
        name: "Inactive",
        value: "inactive"
      }
    ]
  },
  FILTERS: {
    STATUS: [{
        name: "Inactive",
        value: 0
      },
      {
        name: "Active",
        value: 1
      }
    ]
  },
  RULES: {
    STATUS: [{
        name: "Inactive",
        type: "error",
        value: 0
      },
      {
        name: "Active",
        type: "success",
        value: 1
      }
    ],
    TAG: [{
        name: "VIP Visitor",
        type: "info",
        value: 1
      },
      {
        name: "EO GROUP",
        type: "info",
        value: 2
      },
      {
        name: "Loyal Customer",
        type: "info",
        value: 3
      }
    ]
  }
};

export default CONSTANTS;