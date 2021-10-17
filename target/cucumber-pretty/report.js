$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("automatestate.feature");
formatter.feature({
  "line": 1,
  "name": "Automating the Users module of real estate application",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Verify search functionality",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-search-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "admin is on Users page in order to serch the user records",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "admin creates three new user records having \"\u003cusername1\u003e\",\"\u003cemailid1\u003e\",\"\u003cpassword1\u003e\",\"\u003crolename1\u003e\",\"\u003cusername2\u003e\",\"\u003cemailid2\u003e\",\"\u003cpassword2\u003e\",\"\u003crolename2\u003e\",\"\u003cusername3\u003e\",\"\u003cemailid3\u003e\",\"\u003cpassword3\u003e\",\"\u003crolename3\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "clicks on a link having name of the role as \"\u003crole\u003e\" to search the user records based on that role",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "all records having role name as \"\u003crole\u003e\" get displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "admin clicks on \"\u003cAllLink\u003e\" to see all the available user records",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "enters any \"\u003cWord\u003e\" in the search box",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "clicks on Search Users button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "required user records having substring as \"\u003cWord\u003e\", get displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-search-functionality;",
  "rows": [
    {
      "cells": [
        "username1",
        "emailid1",
        "password1",
        "rolename1",
        "username2",
        "emailid2",
        "password2",
        "rolename2",
        "username3",
        "emailid3",
        "password3",
        "rolename3",
        "role",
        "AllLink",
        "Word"
      ],
      "line": 25,
      "id": "automating-the-users-module-of-real-estate-application;verify-search-functionality;;1"
    },
    {
      "cells": [
        "Samiksha55",
        "samu@gmail.com",
        "DemoSamiksha\u002655",
        "Editor",
        "Saurabh56",
        "SampleSaru@gmail.com",
        "PassParu@289",
        "Editor",
        "DemoUserID",
        "uniquemail@gmail.com",
        "Uniquedemo@57",
        "Author",
        "Editor",
        "All",
        "unique"
      ],
      "line": 26,
      "id": "automating-the-users-module-of-real-estate-application;verify-search-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 24687781500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 967660400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 3751002400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 88120400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 479523600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 11885950900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 4799600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 1789297300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 4669900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify search functionality",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-search-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "admin is on Users page in order to serch the user records",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "admin creates three new user records having \"Samiksha55\",\"samu@gmail.com\",\"DemoSamiksha\u002655\",\"Editor\",\"Saurabh56\",\"SampleSaru@gmail.com\",\"PassParu@289\",\"Editor\",\"DemoUserID\",\"uniquemail@gmail.com\",\"Uniquedemo@57\",\"Author\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "clicks on a link having name of the role as \"Editor\" to search the user records based on that role",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "all records having role name as \"Editor\" get displayed",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "admin clicks on \"All\" to see all the available user records",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "enters any \"unique\" in the search box",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "clicks on Search Users button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "required user records having substring as \"unique\", get displayed",
  "matchedColumns": [
    14
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_in_order_to_serch_the_user_records()"
});
formatter.result({
  "duration": 49700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samiksha55",
      "offset": 45
    },
    {
      "val": "samu@gmail.com",
      "offset": 58
    },
    {
      "val": "DemoSamiksha\u002655",
      "offset": 75
    },
    {
      "val": "Editor",
      "offset": 93
    },
    {
      "val": "Saurabh56",
      "offset": 102
    },
    {
      "val": "SampleSaru@gmail.com",
      "offset": 114
    },
    {
      "val": "PassParu@289",
      "offset": 137
    },
    {
      "val": "Editor",
      "offset": 152
    },
    {
      "val": "DemoUserID",
      "offset": 161
    },
    {
      "val": "uniquemail@gmail.com",
      "offset": 174
    },
    {
      "val": "Uniquedemo@57",
      "offset": 197
    },
    {
      "val": "Author",
      "offset": 213
    }
  ],
  "location": "UsersDefination.admin_creates_three_new_user_records_having(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 94549372200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Editor",
      "offset": 45
    }
  ],
  "location": "UsersDefination.clicks_on_a_link_having_name_of_the_role_as_to_search_the_user_records_based_on_that_role(String)"
});
formatter.result({
  "duration": 1817012300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Editor",
      "offset": 33
    }
  ],
  "location": "UsersDefination.all_records_having_role_name_as_get_displayed(String)"
});
formatter.result({
  "duration": 65629900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All",
      "offset": 17
    }
  ],
  "location": "UsersDefination.admin_clicks_on_to_see_all_the_available_user_records(String)"
});
formatter.result({
  "duration": 6697601100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unique",
      "offset": 12
    }
  ],
  "location": "UsersDefination.enters_any_in_the_search_box(String)"
});
formatter.result({
  "duration": 98972300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Search_Users_button()"
});
formatter.result({
  "duration": 1914679000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unique",
      "offset": 43
    }
  ],
  "location": "UsersDefination.required_user_records_having_substring_as_get_displayed(String)"
});
formatter.result({
  "duration": 106716600,
  "status": "passed"
});
formatter.after({
  "duration": 1192000200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "Verify Bulk Actions functionality on Users page",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-bulk-actions-functionality-on-users-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@bulk"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "admin is on Users page in order to use bulk actions functionality",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "admin adds two new users having \"\u003cUsername1\u003e\", \"\u003cemail1\u003e\",\"\u003cPass1\u003e\", \"\u003crole1\u003e\" and \"\u003cUsername2\u003e\", \"\u003cemail2\u003e\",\"\u003cPass2\u003e\",\"\u003crole2\u003e\" respectively",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "clicks on chechbox of user records having username as \"\u003cUsername1\u003e\" and \"\u003cUsername2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "clicks on bulk actions list and selects delete option from the list",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "clicks on apply button in order to delete the selected records",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "admin navigates to Delete Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "clicks on Confirm deletion button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "admin again navigates to Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "receives validation message on successful deletion of the selected records",
  "keyword": "And "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-bulk-actions-functionality-on-users-page;",
  "rows": [
    {
      "cells": [
        "Username1",
        "email1",
        "Pass1",
        "role1",
        "Username2",
        "email2",
        "Pass2",
        "role2"
      ],
      "line": 41,
      "id": "automating-the-users-module-of-real-estate-application;verify-bulk-actions-functionality-on-users-page;;1"
    },
    {
      "cells": [
        "Aaaditi88",
        "demoaditti@gmail.com",
        "Demoaddu@test3",
        "Contributor",
        "A@aavani",
        "test3avani@gmail.com",
        "AvaniDemo@test4",
        "Author"
      ],
      "line": 42,
      "id": "automating-the-users-module-of-real-estate-application;verify-bulk-actions-functionality-on-users-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18676078300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 159699900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 4117337400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 4492800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 175257800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 11434938600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 3676800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 2778117500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 4286000,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify Bulk Actions functionality on Users page",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-bulk-actions-functionality-on-users-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@bulk"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "admin is on Users page in order to use bulk actions functionality",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "admin adds two new users having \"Aaaditi88\", \"demoaditti@gmail.com\",\"Demoaddu@test3\", \"Contributor\" and \"A@aavani\", \"test3avani@gmail.com\",\"AvaniDemo@test4\",\"Author\" respectively",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "clicks on chechbox of user records having username as \"Aaaditi88\" and \"A@aavani\"",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "clicks on bulk actions list and selects delete option from the list",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "clicks on apply button in order to delete the selected records",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "admin navigates to Delete Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "clicks on Confirm deletion button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "admin again navigates to Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "receives validation message on successful deletion of the selected records",
  "keyword": "And "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_in_order_to_use_bulk_actions_functionality()"
});
formatter.result({
  "duration": 37800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aaaditi88",
      "offset": 33
    },
    {
      "val": "demoaditti@gmail.com",
      "offset": 46
    },
    {
      "val": "Demoaddu@test3",
      "offset": 69
    },
    {
      "val": "Contributor",
      "offset": 87
    },
    {
      "val": "A@aavani",
      "offset": 105
    },
    {
      "val": "test3avani@gmail.com",
      "offset": 117
    },
    {
      "val": "AvaniDemo@test4",
      "offset": 140
    },
    {
      "val": "Author",
      "offset": 158
    }
  ],
  "location": "UsersDefination.admin_adds_two_new_users_having_and_respectively(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 54587054600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aaaditi88",
      "offset": 55
    },
    {
      "val": "A@aavani",
      "offset": 71
    }
  ],
  "location": "UsersDefination.clicks_on_chechbox_of_user_records_having_username_as_and(String,String)"
});
formatter.result({
  "duration": 5176702300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_bulk_actions_list_and_selects_delete_option_from_the_list()"
});
formatter.result({
  "duration": 5162367200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_apply_button_in_order_to_delete_the_selected_records()"
});
formatter.result({
  "duration": 1884156500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Delete_Users_page()"
});
formatter.result({
  "duration": 55854500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Confirm_deletion_button()"
});
formatter.result({
  "duration": 2010226900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_again_navigates_to_Users_page()"
});
formatter.result({
  "duration": 4685100,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.receives_validation_message_on_successful_deletion_of_the_selected_records()"
});
formatter.result({
  "duration": 56834200,
  "status": "passed"
});
formatter.after({
  "duration": 1135874300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "Verify Change role to functionality on Users page",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-change-role-to-functionality-on-users-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@changeto"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "admin is on Users page in order to change the role of selected users through change role to functionality",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "admin creates two new user records having \"\u003cUser_n1\u003e\", \"\u003cemail_id1\u003e\",\"\u003cPassword1\u003e\", \"\u003crole_n1\u003e\" and \"\u003cUser_n2\u003e\", \"\u003cemail_id2\u003e\",\"\u003cPassword2\u003e\",\"\u003crole_n2\u003e\" respectively",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "clicks on the checkboxes of required user records having username as \"\u003cUser_n1\u003e\" and \"\u003cUser_n2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "clicks on Change role to list and selects \"\u003cNewRole\u003e\" option from the list",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "clicks on Change button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "admin receives validation message of successful change in the role of selected user records",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "confirms that the role of user records having \"\u003cUser_n1\u003e\", \"\u003cUser_n2\u003e\" are changed to \"\u003cNewRole\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-change-role-to-functionality-on-users-page;",
  "rows": [
    {
      "cells": [
        "User_n1",
        "email_id1",
        "Password1",
        "role_n1",
        "User_n2",
        "email_id2",
        "Password2",
        "role_n2",
        "NewRole"
      ],
      "line": 55,
      "id": "automating-the-users-module-of-real-estate-application;verify-change-role-to-functionality-on-users-page;;1"
    },
    {
      "cells": [
        "10Deepika",
        "deepa@gmail.com",
        "Demodeepa@test5",
        "Contributor",
        "25Aadvika",
        "test5advika@gmail.com",
        "AadvikaSample@test5",
        "Author",
        "Customer"
      ],
      "line": 56,
      "id": "automating-the-users-module-of-real-estate-application;verify-change-role-to-functionality-on-users-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23354983200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 144229300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 3487584600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 6599700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 147496600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 11089453600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 7673700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 6236610400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 6854000,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Verify Change role to functionality on Users page",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-change-role-to-functionality-on-users-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@changeto"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "admin is on Users page in order to change the role of selected users through change role to functionality",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "admin creates two new user records having \"10Deepika\", \"deepa@gmail.com\",\"Demodeepa@test5\", \"Contributor\" and \"25Aadvika\", \"test5advika@gmail.com\",\"AadvikaSample@test5\",\"Author\" respectively",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "clicks on the checkboxes of required user records having username as \"10Deepika\" and \"25Aadvika\"",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "clicks on Change role to list and selects \"Customer\" option from the list",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "clicks on Change button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "admin receives validation message of successful change in the role of selected user records",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "confirms that the role of user records having \"10Deepika\", \"25Aadvika\" are changed to \"Customer\"",
  "matchedColumns": [
    0,
    4,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_in_order_to_change_the_role_of_selected_users_through_change_role_to_functionality()"
});
formatter.result({
  "duration": 45923200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10Deepika",
      "offset": 43
    },
    {
      "val": "deepa@gmail.com",
      "offset": 56
    },
    {
      "val": "Demodeepa@test5",
      "offset": 74
    },
    {
      "val": "Contributor",
      "offset": 93
    },
    {
      "val": "25Aadvika",
      "offset": 111
    },
    {
      "val": "test5advika@gmail.com",
      "offset": 124
    },
    {
      "val": "AadvikaSample@test5",
      "offset": 148
    },
    {
      "val": "Author",
      "offset": 170
    }
  ],
  "location": "UsersDefination.admin_creates_two_new_user_records_having_and_respectively(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 51988414300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10Deepika",
      "offset": 70
    },
    {
      "val": "25Aadvika",
      "offset": 86
    }
  ],
  "location": "UsersDefination.clicks_on_the_checkboxes_of_required_user_records_having_username_as_and(String,String)"
});
formatter.result({
  "duration": 5196862300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer",
      "offset": 43
    }
  ],
  "location": "UsersDefination.clicks_on_Change_role_to_list_and_selects_option_from_the_list(String)"
});
formatter.result({
  "duration": 156612200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Change_button()"
});
formatter.result({
  "duration": 4425321900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_receives_validation_message_of_successful_change_in_the_role_of_selected_user_records()"
});
formatter.result({
  "duration": 63564600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10Deepika",
      "offset": 47
    },
    {
      "val": "25Aadvika",
      "offset": 60
    },
    {
      "val": "Customer",
      "offset": 87
    }
  ],
  "location": "UsersDefination.confirms_that_the_role_of_user_records_having_are_changed_to(String,String,String)"
});
formatter.result({
  "duration": 59523400,
  "status": "passed"
});
formatter.after({
  "duration": 1415617900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 59,
  "name": "Verify edit and view options of admin record",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-edit-and-view-options-of-admin-record",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 58,
      "name": "@editview"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "admin is present on Users page",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "admin clicks on \"Edit\" option available below the username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "admin navigates to Profile page in order to edit the details of admin",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "changes the firstname and lastname to \"\u003cNewFirstName\u003e\" and \"\u003cNewLastName\u003e\" respectively",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "clicks on Update Profile button",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "admin receives \"\u003cValidation_message\u003e\" on the same page after successfully updating the details",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "admin clicks on Users option from the main menu",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "Users page gets displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "admin clicks on \"View\" option available below the username \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "admin navigates to his/her profile page and verifies firstname and lastname with updated values as \"\u003cNewFirstName\u003e\" and \"\u003cNewLastName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "clicks on \"Details\" option of any specific available property",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "admin navigates to the page which is showing all the details of selected property",
  "keyword": "Then "
});
formatter.examples({
  "line": 73,
  "name": "",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-edit-and-view-options-of-admin-record;",
  "rows": [
    {
      "cells": [
        "NewFirstName",
        "NewLastName",
        "Validation_message"
      ],
      "line": 74,
      "id": "automating-the-users-module-of-real-estate-application;verify-edit-and-view-options-of-admin-record;;1"
    },
    {
      "cells": [
        "Nikita",
        "Pande",
        "Profile updated."
      ],
      "line": 75,
      "id": "automating-the-users-module-of-real-estate-application;verify-edit-and-view-options-of-admin-record;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23328918700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 146416900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 3167345800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 15838300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 168297200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 9753048200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 4029600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 1907498300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 4301600,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Verify edit and view options of admin record",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-edit-and-view-options-of-admin-record;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 58,
      "name": "@editview"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "admin is present on Users page",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "admin clicks on \"Edit\" option available below the username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "admin navigates to Profile page in order to edit the details of admin",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "changes the firstname and lastname to \"Nikita\" and \"Pande\" respectively",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "clicks on Update Profile button",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "admin receives \"Profile updated.\" on the same page after successfully updating the details",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "admin clicks on Users option from the main menu",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "Users page gets displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "admin clicks on \"View\" option available below the username \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "admin navigates to his/her profile page and verifies firstname and lastname with updated values as \"Nikita\" and \"Pande\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "clicks on \"Details\" option of any specific available property",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "admin navigates to the page which is showing all the details of selected property",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_present_on_Users_page()"
});
formatter.result({
  "duration": 35900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edit",
      "offset": 17
    },
    {
      "val": "admin",
      "offset": 63
    }
  ],
  "location": "UsersDefination.admin_clicks_on_option_available_below_the_username_as(String,String)"
});
formatter.result({
  "duration": 4367441400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Profile_page_in_order_to_edit_the_details_of_admin()"
});
formatter.result({
  "duration": 54479300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikita",
      "offset": 39
    },
    {
      "val": "Pande",
      "offset": 52
    }
  ],
  "location": "UsersDefination.changes_the_firstname_and_lastname_to_and_respectively(String,String)"
});
formatter.result({
  "duration": 3276948100,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Update_Profile_button()"
});
formatter.result({
  "duration": 7798961200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Profile updated.",
      "offset": 16
    }
  ],
  "location": "UsersDefination.admin_receives_on_the_same_page_after_successfully_updating_the_details(String)"
});
formatter.result({
  "duration": 117164800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Users_option_from_the_main_menu()"
});
formatter.result({
  "duration": 1105030600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.users_page_gets_displayed()"
});
formatter.result({
  "duration": 4630800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "View",
      "offset": 17
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "UsersDefination.admin_clicks_on_option_available_below_the_username(String,String)"
});
formatter.result({
  "duration": 5306563000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikita",
      "offset": 100
    },
    {
      "val": "Pande",
      "offset": 113
    }
  ],
  "location": "UsersDefination.admin_navigates_to_his_her_profile_page_and_verifies_firstname_and_lastname_with_updated_values_as_and(String,String)"
});
formatter.result({
  "duration": 67919000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Details",
      "offset": 11
    }
  ],
  "location": "UsersDefination.clicks_on_option_of_any_specific_available_property(String)"
});
formatter.result({
  "duration": 11704830000,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_the_page_which_is_showing_all_the_details_of_selected_property()"
});
formatter.result({
  "duration": 56623400,
  "status": "passed"
});
formatter.after({
  "duration": 1377602800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 78,
  "name": "Verify edit, delete and view options which are available below the username of each user record except admin record",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-edit,-delete-and-view-options-which-are-available-below-the-username-of-each-user-record-except-admin-record",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 77,
      "name": "@editdeleteview"
    }
  ]
});
formatter.step({
  "line": 79,
  "name": "admin is on Users page in order to edit, view and delete any user record",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "admin creates a new user-record having \"\u003cUserName\u003e\", \"\u003cEmail\u003e\", \"\u003cFirstName\u003e\", \"\u003cLastName\u003e\",\"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "clicks on \"Edit\" which is available below the \"\u003cUserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "admin is redirected to Edit User page for the purpose of editing the details",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "changes the values of firstname, lastname and email with \"\u003cNewFName\u003e\", \"\u003cNewLName\u003e\" and \"\u003cNewEmail\u003e\" respectively and clicks on the Update User button",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "after successful updation, admin receives \"\u003cEdit_ValidationMsg\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "clicks on Back to Users link",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "admin is redirected to Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "admin clicks on the option named as \"View\" which is available below the \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "admin navigates to profile page and verifies firstname, lastname and email with modified values as \"\u003cNewFName\u003e\",\"\u003cNewLName\u003e\" and \"\u003cNewEmail\u003e\" respectively",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "clicks on Dashboard option from Real Estate list which is available on upper bar of the profile page",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "admin is redirected to Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "clicks on the option named as Users from the main menu",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "again Users page gets displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "admin clicks on \"Delete\" option available below the \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "admin is redirected to Delete Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "Confirm Deletion button is clicked by admin",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "admin is again redirected to Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "receives \"\u003cDelete_ValidationMsg\u003e\" after successful deletion of required user record",
  "keyword": "And "
});
formatter.examples({
  "line": 99,
  "name": "",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-edit,-delete-and-view-options-which-are-available-below-the-username-of-each-user-record-except-admin-record;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Email",
        "FirstName",
        "LastName",
        "Password",
        "NewFName",
        "NewLName",
        "NewEmail",
        "Edit_ValidationMsg",
        "Delete_ValidationMsg"
      ],
      "line": 100,
      "id": "automating-the-users-module-of-real-estate-application;verify-edit,-delete-and-view-options-which-are-available-below-the-username-of-each-user-record-except-admin-record;;1"
    },
    {
      "cells": [
        "90Aaditya",
        "aadi@gmail.com",
        "Aaditya",
        "Kulkarni",
        "AadiSample@901",
        "Aakash",
        "Jadhav",
        "aakash33@gmail.com",
        "User updated.",
        "User deleted."
      ],
      "line": 101,
      "id": "automating-the-users-module-of-real-estate-application;verify-edit,-delete-and-view-options-which-are-available-below-the-username-of-each-user-record-except-admin-record;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26079105800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 173249200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 3216006300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 5707200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 247805400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 12401327300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 5592200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 1862794500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 3396800,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "Verify edit, delete and view options which are available below the username of each user record except admin record",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-edit,-delete-and-view-options-which-are-available-below-the-username-of-each-user-record-except-admin-record;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 77,
      "name": "@editdeleteview"
    }
  ]
});
formatter.step({
  "line": 79,
  "name": "admin is on Users page in order to edit, view and delete any user record",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "admin creates a new user-record having \"90Aaditya\", \"aadi@gmail.com\", \"Aaditya\", \"Kulkarni\",\"AadiSample@901\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "clicks on \"Edit\" which is available below the \"90Aaditya\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "admin is redirected to Edit User page for the purpose of editing the details",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "changes the values of firstname, lastname and email with \"Aakash\", \"Jadhav\" and \"aakash33@gmail.com\" respectively and clicks on the Update User button",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "after successful updation, admin receives \"User updated.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "clicks on Back to Users link",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "admin is redirected to Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "admin clicks on the option named as \"View\" which is available below the \"90Aaditya\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "admin navigates to profile page and verifies firstname, lastname and email with modified values as \"Aakash\",\"Jadhav\" and \"aakash33@gmail.com\" respectively",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "clicks on Dashboard option from Real Estate list which is available on upper bar of the profile page",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "admin is redirected to Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "clicks on the option named as Users from the main menu",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "again Users page gets displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "admin clicks on \"Delete\" option available below the \"90Aaditya\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "admin is redirected to Delete Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "Confirm Deletion button is clicked by admin",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "admin is again redirected to Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "receives \"User deleted.\" after successful deletion of required user record",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_in_order_to_edit_view_and_delete_any_user_record()"
});
formatter.result({
  "duration": 52900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90Aaditya",
      "offset": 40
    },
    {
      "val": "aadi@gmail.com",
      "offset": 53
    },
    {
      "val": "Aaditya",
      "offset": 71
    },
    {
      "val": "Kulkarni",
      "offset": 82
    },
    {
      "val": "AadiSample@901",
      "offset": 93
    }
  ],
  "location": "UsersDefination.admin_creates_a_new_user_record_having(String,String,String,String,String)"
});
formatter.result({
  "duration": 34154330400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edit",
      "offset": 11
    },
    {
      "val": "90Aaditya",
      "offset": 47
    }
  ],
  "location": "UsersDefination.clicks_on_which_is_available_below_the(String,String)"
});
formatter.result({
  "duration": 5984789000,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_is_redirected_to_Edit_User_page_for_the_purpose_of_editing_the_details()"
});
formatter.result({
  "duration": 241436200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aakash",
      "offset": 58
    },
    {
      "val": "Jadhav",
      "offset": 68
    },
    {
      "val": "aakash33@gmail.com",
      "offset": 81
    }
  ],
  "location": "UsersDefination.changes_the_values_of_firstname_lastname_and_email_with_and_respectively_and_clicks_on_the_Update_User_button(String,String,String)"
});
formatter.result({
  "duration": 17664828000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User updated.",
      "offset": 43
    }
  ],
  "location": "UsersDefination.after_successful_updation_admin_receives(String)"
});
formatter.result({
  "duration": 420389800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Back_to_Users_link()"
});
formatter.result({
  "duration": 2519749400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_is_redirected_to_Users_page()"
});
formatter.result({
  "duration": 5021408300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "View",
      "offset": 37
    },
    {
      "val": "90Aaditya",
      "offset": 73
    }
  ],
  "location": "UsersDefination.admin_clicks_on_the_option_named_as_which_is_available_below_the(String,String)"
});
formatter.result({
  "duration": 6724640000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aakash",
      "offset": 100
    },
    {
      "val": "Jadhav",
      "offset": 109
    },
    {
      "val": "aakash33@gmail.com",
      "offset": 122
    }
  ],
  "location": "UsersDefination.admin_navigates_to_profile_page_and_verifies_firstname_lastname_and_email_with_modified_values_as_and_respectively(String,String,String)"
});
formatter.result({
  "duration": 3099559800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Dashboard_option_from_Real_Estate_list_which_is_available_on_upper_bar_of_the_profile_page()"
});
formatter.result({
  "duration": 10429961800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_is_redirected_to_Dashboard()"
});
formatter.result({
  "duration": 4803200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_the_option_named_as_Users_from_the_main_menu()"
});
formatter.result({
  "duration": 1212300000,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.again_Users_page_gets_displayed()"
});
formatter.result({
  "duration": 5949000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delete",
      "offset": 17
    },
    {
      "val": "90Aaditya",
      "offset": 53
    }
  ],
  "location": "UsersDefination.admin_clicks_on_option_available_below_the(String,String)"
});
formatter.result({
  "duration": 1539232500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_is_redirected_to_Delete_Users_page()"
});
formatter.result({
  "duration": 61050700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.confirm_Deletion_button_is_clicked_by_admin()"
});
formatter.result({
  "duration": 2063696400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_is_again_redirected_to_Users_page()"
});
formatter.result({
  "duration": 2905000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User deleted.",
      "offset": 10
    }
  ],
  "location": "UsersDefination.receives_after_successful_deletion_of_required_user_record(String)"
});
formatter.result({
  "duration": 28439100,
  "status": "passed"
});
formatter.after({
  "duration": 1280143800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 104,
  "name": "Verify Add new user functionality with valid and invalid inputs",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@addnew1"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "admin is on Users page for the purpose of adding new user",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "admin clicks on Add New option from the main menu",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "admin navigates to Add New User page",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "enters \"\u003cUserName\u003e\" , \"\u003cEmail\u003e\", \"\u003cFirstname\u003e\", \"\u003cLastname\u003e\",\"\u003cWebsiteName\u003e\", \"\u003cPassword\u003e\" in the respective input fields",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "selects \"\u003cstatus\u003e\" as check/uncheck for the checkbox of Send User Notification field and selects \"\u003crolename\u003e\" from Role list",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "clicks on Add New User button after filling the form",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "admin goes to Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "receives \"\u003cAddNew_Validation_Msg\u003e\" after successfully adding the new user having details as \"\u003cUserName\u003e\" , \"\u003cEmail\u003e\", \"\u003cFirstname\u003e\", \"\u003cLastname\u003e\",\"\u003cWebsiteName\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 114,
  "name": "",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Email",
        "Firstname",
        "Lastname",
        "WebsiteName",
        "Password",
        "Status",
        "rolename",
        "AddNew_Validation_Msg"
      ],
      "line": 115,
      "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;1"
    },
    {
      "cells": [
        "Vinay23",
        "1234567890@gmail.com",
        "vinay",
        "joshi",
        "www.sample.com",
        "vinayjoshiRTY@23",
        "UnCheck",
        "Customer",
        "New user created."
      ],
      "line": 116,
      "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;2"
    },
    {
      "cells": [
        "764323557",
        "_______@rediff.com",
        "Bhakti",
        "Mali",
        "www.education.in",
        "bhaktiDemo$28",
        "UnCheck",
        "Agent",
        "New user created."
      ],
      "line": 117,
      "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;3"
    },
    {
      "cells": [
        "35Akshay53",
        "akshay@gmail.com",
        "Akshay35",
        "53Akshay",
        "www./demo.com",
        "akshayDemo$56",
        "Check",
        "Customer",
        "New user created."
      ],
      "line": 118,
      "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;4"
    },
    {
      "cells": [
        "86Purnima",
        "demo@gmail.com",
        "null",
        "null",
        "www.rediff.com",
        "hsgdys^%65TRF878",
        "UnCheck",
        "Editor",
        "New user created."
      ],
      "line": 119,
      "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;5"
    },
    {
      "cells": [
        "aa78@sanu",
        ".sanu123@gmail.com",
        "sanu",
        "khanna",
        "www.mydemo.com",
        "Ashwinidemo@2399",
        "UnCheck",
        "Shop manager",
        "New user created."
      ],
      "line": 120,
      "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;6"
    },
    {
      "cells": [
        "aakshu78i",
        "aakshu897.@gmail.com",
        "akshu",
        "sharma",
        "www.sampleweb.com",
        "hjdgcjys@56GH",
        "UnCheck",
        "Editor",
        "New user created."
      ],
      "line": 121,
      "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;7"
    },
    {
      "cells": [
        "kittu45",
        "sammy67@gmail.com",
        "*%@#$\u0026",
        "sammy",
        "www.sammy.com",
        "hsgdh767SD@ty",
        "UnCheck",
        "Author",
        "New user created."
      ],
      "line": 122,
      "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;8"
    },
    {
      "cells": [
        "aman.singh",
        "aman@gmail.com",
        "aman",
        "^\u0026^%@\u0026",
        "www.natures.com",
        "bgsdhc67DSD@gf",
        "Check",
        "Author",
        "New user created."
      ],
      "line": 123,
      "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;9"
    },
    {
      "cells": [
        "kavita45",
        "kavi@gmail.com",
        "kavi",
        "dchsgdhgfvuysg45ghsaycdgshzbch56vhgvfhgf6fhygfjgjhh",
        "www.kaviweb.com",
        "jhdjhfs767@TF",
        "UnCheck",
        "Author",
        "New user created."
      ],
      "line": 124,
      "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;10"
    },
    {
      "cells": [
        "savita67",
        "savi@gmail.com",
        "dchsgdhgfvuygvshgahvcgshhsaycdgsvhgvfhgfjhjhuyutunk",
        "joshi",
        "www.savidemo.com",
        "hfbvhGHFYT@546",
        "UnCheck",
        "Customer",
        "New user created."
      ],
      "line": 125,
      "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;11"
    },
    {
      "cells": [
        "sagar_user",
        "sagar@gmail.com",
        "sagar",
        "thakur",
        "wwwdotlesscom",
        "jhsvhjYGUY@768",
        "UnCheck",
        "Author",
        "New user created."
      ],
      "line": 126,
      "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;12"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 20942495100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 193912000,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 3374626100,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 4383400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 152588800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 10238473800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 4624600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 1600079200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 3392400,
  "status": "passed"
});
formatter.scenario({
  "line": 116,
  "name": "Verify Add new user functionality with valid and invalid inputs",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@addnew1"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "admin is on Users page for the purpose of adding new user",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "admin clicks on Add New option from the main menu",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "admin navigates to Add New User page",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "enters \"Vinay23\" , \"1234567890@gmail.com\", \"vinay\", \"joshi\",\"www.sample.com\", \"vinayjoshiRTY@23\" in the respective input fields",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "selects \"\u003cstatus\u003e\" as check/uncheck for the checkbox of Send User Notification field and selects \"Customer\" from Role list",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "clicks on Add New User button after filling the form",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "admin goes to Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "receives \"New user created.\" after successfully adding the new user having details as \"Vinay23\" , \"1234567890@gmail.com\", \"vinay\", \"joshi\",\"www.sample.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_for_the_purpose_of_adding_new_user()"
});
formatter.result({
  "duration": 2012585900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_New_option_from_the_main_menu()"
});
formatter.result({
  "duration": 5742745100,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Add_New_User_page()"
});
formatter.result({
  "duration": 3937600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vinay23",
      "offset": 8
    },
    {
      "val": "1234567890@gmail.com",
      "offset": 20
    },
    {
      "val": "vinay",
      "offset": 44
    },
    {
      "val": "joshi",
      "offset": 53
    },
    {
      "val": "www.sample.com",
      "offset": 61
    },
    {
      "val": "vinayjoshiRTY@23",
      "offset": 79
    }
  ],
  "location": "UsersDefination.enters_in_the_respective_input_fields(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 14832110200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cstatus\u003e",
      "offset": 9
    },
    {
      "val": "Customer",
      "offset": 98
    }
  ],
  "location": "UsersDefination.selects_as_check_uncheck_for_the_checkbox_of_Send_User_Notification_field_and_selects_from_Role_list(String,String)"
});
formatter.result({
  "duration": 13891292600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Add_New_User_button_after_filling_the_form()"
});
formatter.result({
  "duration": 6693405300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_goes_to_Users_page()"
});
formatter.result({
  "duration": 4029831200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New user created.",
      "offset": 10
    },
    {
      "val": "Vinay23",
      "offset": 87
    },
    {
      "val": "1234567890@gmail.com",
      "offset": 99
    },
    {
      "val": "vinay",
      "offset": 123
    },
    {
      "val": "joshi",
      "offset": 132
    },
    {
      "val": "www.sample.com",
      "offset": 140
    }
  ],
  "location": "UsersDefination.receives_after_successfully_adding_the_new_user_having_details_as(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 41205800,
  "status": "passed"
});
formatter.after({
  "duration": 1535325000,
  "status": "passed"
});
formatter.before({
  "duration": 58938413400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 163186400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 3666489400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 4803900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 171562800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 11263401500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 7006200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 6398372600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 4274500,
  "status": "passed"
});
formatter.scenario({
  "line": 117,
  "name": "Verify Add new user functionality with valid and invalid inputs",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@addnew1"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "admin is on Users page for the purpose of adding new user",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "admin clicks on Add New option from the main menu",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "admin navigates to Add New User page",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "enters \"764323557\" , \"_______@rediff.com\", \"Bhakti\", \"Mali\",\"www.education.in\", \"bhaktiDemo$28\" in the respective input fields",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "selects \"\u003cstatus\u003e\" as check/uncheck for the checkbox of Send User Notification field and selects \"Agent\" from Role list",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "clicks on Add New User button after filling the form",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "admin goes to Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "receives \"New user created.\" after successfully adding the new user having details as \"764323557\" , \"_______@rediff.com\", \"Bhakti\", \"Mali\",\"www.education.in\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_for_the_purpose_of_adding_new_user()"
});
formatter.result({
  "duration": 2004750700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_New_option_from_the_main_menu()"
});
formatter.result({
  "duration": 7345833200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Add_New_User_page()"
});
formatter.result({
  "duration": 4398100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "764323557",
      "offset": 8
    },
    {
      "val": "_______@rediff.com",
      "offset": 22
    },
    {
      "val": "Bhakti",
      "offset": 44
    },
    {
      "val": "Mali",
      "offset": 54
    },
    {
      "val": "www.education.in",
      "offset": 61
    },
    {
      "val": "bhaktiDemo$28",
      "offset": 81
    }
  ],
  "location": "UsersDefination.enters_in_the_respective_input_fields(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 15094279500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cstatus\u003e",
      "offset": 9
    },
    {
      "val": "Agent",
      "offset": 98
    }
  ],
  "location": "UsersDefination.selects_as_check_uncheck_for_the_checkbox_of_Send_User_Notification_field_and_selects_from_Role_list(String,String)"
});
formatter.result({
  "duration": 13832951100,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Add_New_User_button_after_filling_the_form()"
});
formatter.result({
  "duration": 6559379600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_goes_to_Users_page()"
});
formatter.result({
  "duration": 4010262200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New user created.",
      "offset": 10
    },
    {
      "val": "764323557",
      "offset": 87
    },
    {
      "val": "_______@rediff.com",
      "offset": 101
    },
    {
      "val": "Bhakti",
      "offset": 123
    },
    {
      "val": "Mali",
      "offset": 133
    },
    {
      "val": "www.education.in",
      "offset": 140
    }
  ],
  "location": "UsersDefination.receives_after_successfully_adding_the_new_user_having_details_as(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 57538600,
  "status": "passed"
});
formatter.after({
  "duration": 3755685400,
  "status": "passed"
});
formatter.before({
  "duration": 20423696300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 182706200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 3276012900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 17612300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 210823500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 11163298600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 3933600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 2065614700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 3710100,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "Verify Add new user functionality with valid and invalid inputs",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@addnew1"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "admin is on Users page for the purpose of adding new user",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "admin clicks on Add New option from the main menu",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "admin navigates to Add New User page",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "enters \"35Akshay53\" , \"akshay@gmail.com\", \"Akshay35\", \"53Akshay\",\"www./demo.com\", \"akshayDemo$56\" in the respective input fields",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "selects \"\u003cstatus\u003e\" as check/uncheck for the checkbox of Send User Notification field and selects \"Customer\" from Role list",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "clicks on Add New User button after filling the form",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "admin goes to Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "receives \"New user created.\" after successfully adding the new user having details as \"35Akshay53\" , \"akshay@gmail.com\", \"Akshay35\", \"53Akshay\",\"www./demo.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_for_the_purpose_of_adding_new_user()"
});
formatter.result({
  "duration": 2006218700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_New_option_from_the_main_menu()"
});
formatter.result({
  "duration": 6219128300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Add_New_User_page()"
});
formatter.result({
  "duration": 5235900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35Akshay53",
      "offset": 8
    },
    {
      "val": "akshay@gmail.com",
      "offset": 23
    },
    {
      "val": "Akshay35",
      "offset": 43
    },
    {
      "val": "53Akshay",
      "offset": 55
    },
    {
      "val": "www./demo.com",
      "offset": 66
    },
    {
      "val": "akshayDemo$56",
      "offset": 83
    }
  ],
  "location": "UsersDefination.enters_in_the_respective_input_fields(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 15159936400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cstatus\u003e",
      "offset": 9
    },
    {
      "val": "Customer",
      "offset": 98
    }
  ],
  "location": "UsersDefination.selects_as_check_uncheck_for_the_checkbox_of_Send_User_Notification_field_and_selects_from_Role_list(String,String)"
});
formatter.result({
  "duration": 14719814900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Add_New_User_button_after_filling_the_form()"
});
formatter.result({
  "duration": 6196167600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_goes_to_Users_page()"
});
formatter.result({
  "duration": 4010431600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New user created.",
      "offset": 10
    },
    {
      "val": "35Akshay53",
      "offset": 87
    },
    {
      "val": "akshay@gmail.com",
      "offset": 102
    },
    {
      "val": "Akshay35",
      "offset": 122
    },
    {
      "val": "53Akshay",
      "offset": 134
    },
    {
      "val": "www./demo.com",
      "offset": 145
    }
  ],
  "location": "UsersDefination.receives_after_successfully_adding_the_new_user_having_details_as(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 59917200,
  "status": "passed"
});
formatter.after({
  "duration": 1483088100,
  "status": "passed"
});
formatter.before({
  "duration": 54013155800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 186734000,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 3186952000,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 5204800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 187966200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 10681051900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 5516000,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 2020144800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 4559300,
  "status": "passed"
});
formatter.scenario({
  "line": 119,
  "name": "Verify Add new user functionality with valid and invalid inputs",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@addnew1"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "admin is on Users page for the purpose of adding new user",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "admin clicks on Add New option from the main menu",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "admin navigates to Add New User page",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "enters \"86Purnima\" , \"demo@gmail.com\", \"null\", \"null\",\"www.rediff.com\", \"hsgdys^%65TRF878\" in the respective input fields",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "selects \"\u003cstatus\u003e\" as check/uncheck for the checkbox of Send User Notification field and selects \"Editor\" from Role list",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "clicks on Add New User button after filling the form",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "admin goes to Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "receives \"New user created.\" after successfully adding the new user having details as \"86Purnima\" , \"demo@gmail.com\", \"null\", \"null\",\"www.rediff.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_for_the_purpose_of_adding_new_user()"
});
formatter.result({
  "duration": 2007981800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_New_option_from_the_main_menu()"
});
formatter.result({
  "duration": 5786780700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Add_New_User_page()"
});
formatter.result({
  "duration": 4170000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "86Purnima",
      "offset": 8
    },
    {
      "val": "demo@gmail.com",
      "offset": 22
    },
    {
      "val": "null",
      "offset": 40
    },
    {
      "val": "null",
      "offset": 48
    },
    {
      "val": "www.rediff.com",
      "offset": 55
    },
    {
      "val": "hsgdys^%65TRF878",
      "offset": 73
    }
  ],
  "location": "UsersDefination.enters_in_the_respective_input_fields(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 14857376500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cstatus\u003e",
      "offset": 9
    },
    {
      "val": "Editor",
      "offset": 98
    }
  ],
  "location": "UsersDefination.selects_as_check_uncheck_for_the_checkbox_of_Send_User_Notification_field_and_selects_from_Role_list(String,String)"
});
formatter.result({
  "duration": 13479536700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Add_New_User_button_after_filling_the_form()"
});
formatter.result({
  "duration": 6176115900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_goes_to_Users_page()"
});
formatter.result({
  "duration": 4020860200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New user created.",
      "offset": 10
    },
    {
      "val": "86Purnima",
      "offset": 87
    },
    {
      "val": "demo@gmail.com",
      "offset": 101
    },
    {
      "val": "null",
      "offset": 119
    },
    {
      "val": "null",
      "offset": 127
    },
    {
      "val": "www.rediff.com",
      "offset": 134
    }
  ],
  "location": "UsersDefination.receives_after_successfully_adding_the_new_user_having_details_as(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 59476300,
  "status": "passed"
});
formatter.after({
  "duration": 1356144700,
  "status": "passed"
});
formatter.before({
  "duration": 22736934800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 157650500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 4305893700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 12561600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 184254400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 12426608500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 6891600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 1820955200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 3533300,
  "status": "passed"
});
formatter.scenario({
  "line": 120,
  "name": "Verify Add new user functionality with valid and invalid inputs",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@addnew1"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "admin is on Users page for the purpose of adding new user",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "admin clicks on Add New option from the main menu",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "admin navigates to Add New User page",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "enters \"aa78@sanu\" , \".sanu123@gmail.com\", \"sanu\", \"khanna\",\"www.mydemo.com\", \"Ashwinidemo@2399\" in the respective input fields",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "selects \"\u003cstatus\u003e\" as check/uncheck for the checkbox of Send User Notification field and selects \"Shop manager\" from Role list",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "clicks on Add New User button after filling the form",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "admin goes to Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "receives \"New user created.\" after successfully adding the new user having details as \"aa78@sanu\" , \".sanu123@gmail.com\", \"sanu\", \"khanna\",\"www.mydemo.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_for_the_purpose_of_adding_new_user()"
});
formatter.result({
  "duration": 2020897300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_New_option_from_the_main_menu()"
});
formatter.result({
  "duration": 4802526400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Add_New_User_page()"
});
formatter.result({
  "duration": 4150400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aa78@sanu",
      "offset": 8
    },
    {
      "val": ".sanu123@gmail.com",
      "offset": 22
    },
    {
      "val": "sanu",
      "offset": 44
    },
    {
      "val": "khanna",
      "offset": 52
    },
    {
      "val": "www.mydemo.com",
      "offset": 61
    },
    {
      "val": "Ashwinidemo@2399",
      "offset": 79
    }
  ],
  "location": "UsersDefination.enters_in_the_respective_input_fields(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 15723777100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cstatus\u003e",
      "offset": 9
    },
    {
      "val": "Shop manager",
      "offset": 98
    }
  ],
  "location": "UsersDefination.selects_as_check_uncheck_for_the_checkbox_of_Send_User_Notification_field_and_selects_from_Role_list(String,String)"
});
formatter.result({
  "duration": 13512991700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Add_New_User_button_after_filling_the_form()"
});
formatter.result({
  "duration": 6292765000,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_goes_to_Users_page()"
});
formatter.result({
  "duration": 4024768800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New user created.",
      "offset": 10
    },
    {
      "val": "aa78@sanu",
      "offset": 87
    },
    {
      "val": ".sanu123@gmail.com",
      "offset": 101
    },
    {
      "val": "sanu",
      "offset": 123
    },
    {
      "val": "khanna",
      "offset": 131
    },
    {
      "val": "www.mydemo.com",
      "offset": 140
    }
  ],
  "location": "UsersDefination.receives_after_successfully_adding_the_new_user_having_details_as(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 40141800,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.UsersDefination.receives_after_successfully_adding_the_new_user_having_details_as(UsersDefination.java:1630)\r\n\tat ✽.And receives \"New user created.\" after successfully adding the new user having details as \"aa78@sanu\" , \".sanu123@gmail.com\", \"sanu\", \"khanna\",\"www.mydemo.com\"(automatestate.feature:112)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1027718100,
  "status": "passed"
});
formatter.before({
  "duration": 20175078800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 186300600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 3296034300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 12849500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 167649500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 14851319600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 5889100,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 1972139200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 3584700,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "Verify Add new user functionality with valid and invalid inputs",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@addnew1"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "admin is on Users page for the purpose of adding new user",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "admin clicks on Add New option from the main menu",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "admin navigates to Add New User page",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "enters \"aakshu78i\" , \"aakshu897.@gmail.com\", \"akshu\", \"sharma\",\"www.sampleweb.com\", \"hjdgcjys@56GH\" in the respective input fields",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "selects \"\u003cstatus\u003e\" as check/uncheck for the checkbox of Send User Notification field and selects \"Editor\" from Role list",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "clicks on Add New User button after filling the form",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "admin goes to Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "receives \"New user created.\" after successfully adding the new user having details as \"aakshu78i\" , \"aakshu897.@gmail.com\", \"akshu\", \"sharma\",\"www.sampleweb.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_for_the_purpose_of_adding_new_user()"
});
formatter.result({
  "duration": 2006744400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_New_option_from_the_main_menu()"
});
formatter.result({
  "duration": 4899817400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Add_New_User_page()"
});
formatter.result({
  "duration": 3619500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aakshu78i",
      "offset": 8
    },
    {
      "val": "aakshu897.@gmail.com",
      "offset": 22
    },
    {
      "val": "akshu",
      "offset": 46
    },
    {
      "val": "sharma",
      "offset": 55
    },
    {
      "val": "www.sampleweb.com",
      "offset": 64
    },
    {
      "val": "hjdgcjys@56GH",
      "offset": 85
    }
  ],
  "location": "UsersDefination.enters_in_the_respective_input_fields(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 14896206500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cstatus\u003e",
      "offset": 9
    },
    {
      "val": "Editor",
      "offset": 98
    }
  ],
  "location": "UsersDefination.selects_as_check_uncheck_for_the_checkbox_of_Send_User_Notification_field_and_selects_from_Role_list(String,String)"
});
formatter.result({
  "duration": 13425592300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Add_New_User_button_after_filling_the_form()"
});
formatter.result({
  "duration": 6019339400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_goes_to_Users_page()"
});
formatter.result({
  "duration": 4022666100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New user created.",
      "offset": 10
    },
    {
      "val": "aakshu78i",
      "offset": 87
    },
    {
      "val": "aakshu897.@gmail.com",
      "offset": 101
    },
    {
      "val": "akshu",
      "offset": 125
    },
    {
      "val": "sharma",
      "offset": 134
    },
    {
      "val": "www.sampleweb.com",
      "offset": 143
    }
  ],
  "location": "UsersDefination.receives_after_successfully_adding_the_new_user_having_details_as(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 58573300,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.UsersDefination.receives_after_successfully_adding_the_new_user_having_details_as(UsersDefination.java:1637)\r\n\tat ✽.And receives \"New user created.\" after successfully adding the new user having details as \"aakshu78i\" , \"aakshu897.@gmail.com\", \"akshu\", \"sharma\",\"www.sampleweb.com\"(automatestate.feature:112)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1561720700,
  "status": "passed"
});
formatter.before({
  "duration": 22257915300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 151276600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 3497115100,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 16629300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 190203700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 12118123900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 11399300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 1809867600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 5742200,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "Verify Add new user functionality with valid and invalid inputs",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@addnew1"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "admin is on Users page for the purpose of adding new user",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "admin clicks on Add New option from the main menu",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "admin navigates to Add New User page",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "enters \"kittu45\" , \"sammy67@gmail.com\", \"*%@#$\u0026\", \"sammy\",\"www.sammy.com\", \"hsgdh767SD@ty\" in the respective input fields",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "selects \"\u003cstatus\u003e\" as check/uncheck for the checkbox of Send User Notification field and selects \"Author\" from Role list",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "clicks on Add New User button after filling the form",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "admin goes to Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "receives \"New user created.\" after successfully adding the new user having details as \"kittu45\" , \"sammy67@gmail.com\", \"*%@#$\u0026\", \"sammy\",\"www.sammy.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_for_the_purpose_of_adding_new_user()"
});
formatter.result({
  "duration": 2010793800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_New_option_from_the_main_menu()"
});
formatter.result({
  "duration": 4968432300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Add_New_User_page()"
});
formatter.result({
  "duration": 6060200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kittu45",
      "offset": 8
    },
    {
      "val": "sammy67@gmail.com",
      "offset": 20
    },
    {
      "val": "*%@#$\u0026",
      "offset": 41
    },
    {
      "val": "sammy",
      "offset": 51
    },
    {
      "val": "www.sammy.com",
      "offset": 59
    },
    {
      "val": "hsgdh767SD@ty",
      "offset": 76
    }
  ],
  "location": "UsersDefination.enters_in_the_respective_input_fields(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 14738443800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cstatus\u003e",
      "offset": 9
    },
    {
      "val": "Author",
      "offset": 98
    }
  ],
  "location": "UsersDefination.selects_as_check_uncheck_for_the_checkbox_of_Send_User_Notification_field_and_selects_from_Role_list(String,String)"
});
formatter.result({
  "duration": 13325377400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Add_New_User_button_after_filling_the_form()"
});
formatter.result({
  "duration": 6107142300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_goes_to_Users_page()"
});
formatter.result({
  "duration": 4034930800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New user created.",
      "offset": 10
    },
    {
      "val": "kittu45",
      "offset": 87
    },
    {
      "val": "sammy67@gmail.com",
      "offset": 99
    },
    {
      "val": "*%@#$\u0026",
      "offset": 120
    },
    {
      "val": "sammy",
      "offset": 130
    },
    {
      "val": "www.sammy.com",
      "offset": 138
    }
  ],
  "location": "UsersDefination.receives_after_successfully_adding_the_new_user_having_details_as(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 57649500,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.UsersDefination.receives_after_successfully_adding_the_new_user_having_details_as(UsersDefination.java:1647)\r\n\tat ✽.And receives \"New user created.\" after successfully adding the new user having details as \"kittu45\" , \"sammy67@gmail.com\", \"*%@#$\u0026\", \"sammy\",\"www.sammy.com\"(automatestate.feature:112)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1209342300,
  "status": "passed"
});
formatter.before({
  "duration": 44330581500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 152835600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 3540920300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 7523300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 162931000,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 10736558500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 7108700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 2173896000,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 3013200,
  "status": "passed"
});
formatter.scenario({
  "line": 123,
  "name": "Verify Add new user functionality with valid and invalid inputs",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@addnew1"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "admin is on Users page for the purpose of adding new user",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "admin clicks on Add New option from the main menu",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "admin navigates to Add New User page",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "enters \"aman.singh\" , \"aman@gmail.com\", \"aman\", \"^\u0026^%@\u0026\",\"www.natures.com\", \"bgsdhc67DSD@gf\" in the respective input fields",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "selects \"\u003cstatus\u003e\" as check/uncheck for the checkbox of Send User Notification field and selects \"Author\" from Role list",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "clicks on Add New User button after filling the form",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "admin goes to Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "receives \"New user created.\" after successfully adding the new user having details as \"aman.singh\" , \"aman@gmail.com\", \"aman\", \"^\u0026^%@\u0026\",\"www.natures.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_for_the_purpose_of_adding_new_user()"
});
formatter.result({
  "duration": 2022214700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_New_option_from_the_main_menu()"
});
formatter.result({
  "duration": 4817271500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Add_New_User_page()"
});
formatter.result({
  "duration": 6936400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aman.singh",
      "offset": 8
    },
    {
      "val": "aman@gmail.com",
      "offset": 23
    },
    {
      "val": "aman",
      "offset": 41
    },
    {
      "val": "^\u0026^%@\u0026",
      "offset": 49
    },
    {
      "val": "www.natures.com",
      "offset": 58
    },
    {
      "val": "bgsdhc67DSD@gf",
      "offset": 77
    }
  ],
  "location": "UsersDefination.enters_in_the_respective_input_fields(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 14801794100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cstatus\u003e",
      "offset": 9
    },
    {
      "val": "Author",
      "offset": 98
    }
  ],
  "location": "UsersDefination.selects_as_check_uncheck_for_the_checkbox_of_Send_User_Notification_field_and_selects_from_Role_list(String,String)"
});
formatter.result({
  "duration": 13417713200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Add_New_User_button_after_filling_the_form()"
});
formatter.result({
  "duration": 5852423300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_goes_to_Users_page()"
});
formatter.result({
  "duration": 4029659400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New user created.",
      "offset": 10
    },
    {
      "val": "aman.singh",
      "offset": 87
    },
    {
      "val": "aman@gmail.com",
      "offset": 102
    },
    {
      "val": "aman",
      "offset": 120
    },
    {
      "val": "^\u0026^%@\u0026",
      "offset": 128
    },
    {
      "val": "www.natures.com",
      "offset": 137
    }
  ],
  "location": "UsersDefination.receives_after_successfully_adding_the_new_user_having_details_as(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 55781500,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.UsersDefination.receives_after_successfully_adding_the_new_user_having_details_as(UsersDefination.java:1657)\r\n\tat ✽.And receives \"New user created.\" after successfully adding the new user having details as \"aman.singh\" , \"aman@gmail.com\", \"aman\", \"^\u0026^%@\u0026\",\"www.natures.com\"(automatestate.feature:112)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1233577200,
  "status": "passed"
});
formatter.before({
  "duration": 21139743800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 139242900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 3437127500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 5108200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 207266900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 10113510500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 6063200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 1903018700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 5421100,
  "status": "passed"
});
formatter.scenario({
  "line": 124,
  "name": "Verify Add new user functionality with valid and invalid inputs",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@addnew1"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "admin is on Users page for the purpose of adding new user",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "admin clicks on Add New option from the main menu",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "admin navigates to Add New User page",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "enters \"kavita45\" , \"kavi@gmail.com\", \"kavi\", \"dchsgdhgfvuysg45ghsaycdgshzbch56vhgvfhgf6fhygfjgjhh\",\"www.kaviweb.com\", \"jhdjhfs767@TF\" in the respective input fields",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "selects \"\u003cstatus\u003e\" as check/uncheck for the checkbox of Send User Notification field and selects \"Author\" from Role list",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "clicks on Add New User button after filling the form",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "admin goes to Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "receives \"New user created.\" after successfully adding the new user having details as \"kavita45\" , \"kavi@gmail.com\", \"kavi\", \"dchsgdhgfvuysg45ghsaycdgshzbch56vhgvfhgf6fhygfjgjhh\",\"www.kaviweb.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_for_the_purpose_of_adding_new_user()"
});
formatter.result({
  "duration": 2011334600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_New_option_from_the_main_menu()"
});
formatter.result({
  "duration": 4933025800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Add_New_User_page()"
});
formatter.result({
  "duration": 3583900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kavita45",
      "offset": 8
    },
    {
      "val": "kavi@gmail.com",
      "offset": 21
    },
    {
      "val": "kavi",
      "offset": 39
    },
    {
      "val": "dchsgdhgfvuysg45ghsaycdgshzbch56vhgvfhgf6fhygfjgjhh",
      "offset": 47
    },
    {
      "val": "www.kaviweb.com",
      "offset": 101
    },
    {
      "val": "jhdjhfs767@TF",
      "offset": 120
    }
  ],
  "location": "UsersDefination.enters_in_the_respective_input_fields(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 14830266900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cstatus\u003e",
      "offset": 9
    },
    {
      "val": "Author",
      "offset": 98
    }
  ],
  "location": "UsersDefination.selects_as_check_uncheck_for_the_checkbox_of_Send_User_Notification_field_and_selects_from_Role_list(String,String)"
});
formatter.result({
  "duration": 13313476300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Add_New_User_button_after_filling_the_form()"
});
formatter.result({
  "duration": 6032549700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_goes_to_Users_page()"
});
formatter.result({
  "duration": 4030562700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New user created.",
      "offset": 10
    },
    {
      "val": "kavita45",
      "offset": 87
    },
    {
      "val": "kavi@gmail.com",
      "offset": 100
    },
    {
      "val": "kavi",
      "offset": 118
    },
    {
      "val": "dchsgdhgfvuysg45ghsaycdgshzbch56vhgvfhgf6fhygfjgjhh",
      "offset": 126
    },
    {
      "val": "www.kaviweb.com",
      "offset": 180
    }
  ],
  "location": "UsersDefination.receives_after_successfully_adding_the_new_user_having_details_as(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 42669300,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.UsersDefination.receives_after_successfully_adding_the_new_user_having_details_as(UsersDefination.java:1669)\r\n\tat ✽.And receives \"New user created.\" after successfully adding the new user having details as \"kavita45\" , \"kavi@gmail.com\", \"kavi\", \"dchsgdhgfvuysg45ghsaycdgshzbch56vhgvfhgf6fhygfjgjhh\",\"www.kaviweb.com\"(automatestate.feature:112)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1021690200,
  "status": "passed"
});
formatter.before({
  "duration": 20482623600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 158599400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 7945373600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 8230000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 176160400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 11049045000,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 7017400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 1771707300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 4025800,
  "status": "passed"
});
formatter.scenario({
  "line": 125,
  "name": "Verify Add new user functionality with valid and invalid inputs",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@addnew1"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "admin is on Users page for the purpose of adding new user",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "admin clicks on Add New option from the main menu",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "admin navigates to Add New User page",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "enters \"savita67\" , \"savi@gmail.com\", \"dchsgdhgfvuygvshgahvcgshhsaycdgsvhgvfhgfjhjhuyutunk\", \"joshi\",\"www.savidemo.com\", \"hfbvhGHFYT@546\" in the respective input fields",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "selects \"\u003cstatus\u003e\" as check/uncheck for the checkbox of Send User Notification field and selects \"Customer\" from Role list",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "clicks on Add New User button after filling the form",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "admin goes to Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "receives \"New user created.\" after successfully adding the new user having details as \"savita67\" , \"savi@gmail.com\", \"dchsgdhgfvuygvshgahvcgshhsaycdgsvhgvfhgfjhjhuyutunk\", \"joshi\",\"www.savidemo.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_for_the_purpose_of_adding_new_user()"
});
formatter.result({
  "duration": 2010657900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_New_option_from_the_main_menu()"
});
formatter.result({
  "duration": 4897310200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Add_New_User_page()"
});
formatter.result({
  "duration": 5279700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "savita67",
      "offset": 8
    },
    {
      "val": "savi@gmail.com",
      "offset": 21
    },
    {
      "val": "dchsgdhgfvuygvshgahvcgshhsaycdgsvhgvfhgfjhjhuyutunk",
      "offset": 39
    },
    {
      "val": "joshi",
      "offset": 94
    },
    {
      "val": "www.savidemo.com",
      "offset": 102
    },
    {
      "val": "hfbvhGHFYT@546",
      "offset": 122
    }
  ],
  "location": "UsersDefination.enters_in_the_respective_input_fields(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 14800411700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cstatus\u003e",
      "offset": 9
    },
    {
      "val": "Customer",
      "offset": 98
    }
  ],
  "location": "UsersDefination.selects_as_check_uncheck_for_the_checkbox_of_Send_User_Notification_field_and_selects_from_Role_list(String,String)"
});
formatter.result({
  "duration": 13297177600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Add_New_User_button_after_filling_the_form()"
});
formatter.result({
  "duration": 5836488000,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_goes_to_Users_page()"
});
formatter.result({
  "duration": 4019633700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New user created.",
      "offset": 10
    },
    {
      "val": "savita67",
      "offset": 87
    },
    {
      "val": "savi@gmail.com",
      "offset": 100
    },
    {
      "val": "dchsgdhgfvuygvshgahvcgshhsaycdgsvhgvfhgfjhjhuyutunk",
      "offset": 118
    },
    {
      "val": "joshi",
      "offset": 173
    },
    {
      "val": "www.savidemo.com",
      "offset": 181
    }
  ],
  "location": "UsersDefination.receives_after_successfully_adding_the_new_user_having_details_as(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 57137700,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.UsersDefination.receives_after_successfully_adding_the_new_user_having_details_as(UsersDefination.java:1663)\r\n\tat ✽.And receives \"New user created.\" after successfully adding the new user having details as \"savita67\" , \"savi@gmail.com\", \"dchsgdhgfvuygvshgahvcgshhsaycdgsvhgvfhgfjhjhuyutunk\", \"joshi\",\"www.savidemo.com\"(automatestate.feature:112)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1191413400,
  "status": "passed"
});
formatter.before({
  "duration": 15470384300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 200151100,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 4030392300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 23605300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 177003200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 10611681600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 10096100,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 1805764100,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 3765000,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "Verify Add new user functionality with valid and invalid inputs",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-functionality-with-valid-and-invalid-inputs;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@addnew1"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "admin is on Users page for the purpose of adding new user",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "admin clicks on Add New option from the main menu",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "admin navigates to Add New User page",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "enters \"sagar_user\" , \"sagar@gmail.com\", \"sagar\", \"thakur\",\"wwwdotlesscom\", \"jhsvhjYGUY@768\" in the respective input fields",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "selects \"\u003cstatus\u003e\" as check/uncheck for the checkbox of Send User Notification field and selects \"Author\" from Role list",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "clicks on Add New User button after filling the form",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "admin goes to Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "receives \"New user created.\" after successfully adding the new user having details as \"sagar_user\" , \"sagar@gmail.com\", \"sagar\", \"thakur\",\"wwwdotlesscom\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_for_the_purpose_of_adding_new_user()"
});
formatter.result({
  "duration": 2022264500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_New_option_from_the_main_menu()"
});
formatter.result({
  "duration": 5051752200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Add_New_User_page()"
});
formatter.result({
  "duration": 7222300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sagar_user",
      "offset": 8
    },
    {
      "val": "sagar@gmail.com",
      "offset": 23
    },
    {
      "val": "sagar",
      "offset": 42
    },
    {
      "val": "thakur",
      "offset": 51
    },
    {
      "val": "wwwdotlesscom",
      "offset": 60
    },
    {
      "val": "jhsvhjYGUY@768",
      "offset": 77
    }
  ],
  "location": "UsersDefination.enters_in_the_respective_input_fields(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 14762496100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cstatus\u003e",
      "offset": 9
    },
    {
      "val": "Author",
      "offset": 98
    }
  ],
  "location": "UsersDefination.selects_as_check_uncheck_for_the_checkbox_of_Send_User_Notification_field_and_selects_from_Role_list(String,String)"
});
formatter.result({
  "duration": 13476360500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Add_New_User_button_after_filling_the_form()"
});
formatter.result({
  "duration": 6007430700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_goes_to_Users_page()"
});
formatter.result({
  "duration": 4033839500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New user created.",
      "offset": 10
    },
    {
      "val": "sagar_user",
      "offset": 87
    },
    {
      "val": "sagar@gmail.com",
      "offset": 102
    },
    {
      "val": "sagar",
      "offset": 121
    },
    {
      "val": "thakur",
      "offset": 130
    },
    {
      "val": "wwwdotlesscom",
      "offset": 139
    }
  ],
  "location": "UsersDefination.receives_after_successfully_adding_the_new_user_having_details_as(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 56931800,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.UsersDefination.receives_after_successfully_adding_the_new_user_having_details_as(UsersDefination.java:1680)\r\n\tat ✽.And receives \"New user created.\" after successfully adding the new user having details as \"sagar_user\" , \"sagar@gmail.com\", \"sagar\", \"thakur\",\"wwwdotlesscom\"(automatestate.feature:112)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1548856700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 129,
  "name": "Verify Add new user form with expected validation messages",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-form-with-expected-validation-messages",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 128,
      "name": "@addnew2"
    }
  ]
});
formatter.step({
  "line": 130,
  "name": "admin is on Users page and wants to add new user",
  "keyword": "Given "
});
formatter.step({
  "line": 131,
  "name": "admin clicks on Add New button",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "admin is redirected to Add New User page",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "enters \"\u003cUserName\u003e\" , \"\u003cEmail\u003e\", \"\u003cFirstname\u003e\", \"\u003cLastname\u003e\",\"\u003cWebsiteName\u003e\", \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "selects the \"\u003cstatus\u003e\" of checkbox of Send User Notification field as check/uncheck",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "selects \"\u003crole\u003e\" from the list",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "admin clicks on Add new User button",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "admin receives \"\u003cvalidation_Msg/Action\u003e\" after entering the details of user whose username and email are \"\u003cUserName\u003e\" and \"\u003cEmail\u003e\" reprectively",
  "keyword": "Then "
});
formatter.examples({
  "line": 138,
  "name": "",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-form-with-expected-validation-messages;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Email",
        "Firstname",
        "Lastname",
        "WebsiteName",
        "Password",
        "status",
        "role",
        "validation_Msg/Action"
      ],
      "line": 139,
      "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-form-with-expected-validation-messages;;1"
    },
    {
      "cells": [
        "\u0026^%$%\u0026",
        "anu@gmail.com",
        "Anushka",
        "Sharma",
        "www.helpinghands.com",
        "Sampleanu@567",
        "Check",
        "Agent",
        "username is invalid"
      ],
      "line": 140,
      "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-form-with-expected-validation-messages;;2"
    },
    {
      "cells": [
        "null",
        "null",
        "Anushka",
        "Sharma",
        "www.helpinghands.com",
        "Sampleanu@567",
        "UnCheck",
        "Agent",
        "becomes red"
      ],
      "line": 141,
      "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-form-with-expected-validation-messages;;3"
    },
    {
      "cells": [
        "Anushaka25",
        "anu25abccom",
        "Anushka",
        "Sharma",
        "www.helpinghands.com",
        "Sampleanu@567",
        "Check",
        "Agent",
        "email address isn’t correct"
      ],
      "line": 142,
      "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-form-with-expected-validation-messages;;4"
    },
    {
      "cells": [
        "Anushaka25",
        "@gmail.com",
        "Anushka",
        "Sharma",
        "www.helpinghands.com",
        "Sampleanu@567",
        "Check",
        "Agent",
        "email address isn’t correct"
      ],
      "line": 143,
      "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-form-with-expected-validation-messages;;5"
    },
    {
      "cells": [
        "Anushaka25",
        "example@gmail..com",
        "Anushka",
        "Sharma",
        "www.helpinghands.com",
        "Sampleanu@567",
        "UnCheck",
        "Agent",
        "email address isn’t correct"
      ],
      "line": 144,
      "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-form-with-expected-validation-messages;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 21338754300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 186116000,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 3214457900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 6414400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 152050700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 9906120500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 10350500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 1666838700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 5175300,
  "status": "passed"
});
formatter.scenario({
  "line": 140,
  "name": "Verify Add new user form with expected validation messages",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-form-with-expected-validation-messages;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 128,
      "name": "@addnew2"
    }
  ]
});
formatter.step({
  "line": 130,
  "name": "admin is on Users page and wants to add new user",
  "keyword": "Given "
});
formatter.step({
  "line": 131,
  "name": "admin clicks on Add New button",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "admin is redirected to Add New User page",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "enters \"\u0026^%$%\u0026\" , \"anu@gmail.com\", \"Anushka\", \"Sharma\",\"www.helpinghands.com\", \"Sampleanu@567\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "selects the \"Check\" of checkbox of Send User Notification field as check/uncheck",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "selects \"Agent\" from the list",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "admin clicks on Add new User button",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "admin receives \"username is invalid\" after entering the details of user whose username and email are \"\u0026^%$%\u0026\" and \"anu@gmail.com\" reprectively",
  "matchedColumns": [
    0,
    1,
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_and_wants_to_add_new_user()"
});
formatter.result({
  "duration": 34800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_New_button()"
});
formatter.result({
  "duration": 5200208300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_is_redirected_to_Add_New_User_page()"
});
formatter.result({
  "duration": 4843700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0026^%$%\u0026",
      "offset": 8
    },
    {
      "val": "anu@gmail.com",
      "offset": 19
    },
    {
      "val": "Anushka",
      "offset": 36
    },
    {
      "val": "Sharma",
      "offset": 47
    },
    {
      "val": "www.helpinghands.com",
      "offset": 56
    },
    {
      "val": "Sampleanu@567",
      "offset": 80
    }
  ],
  "location": "UsersDefination.enters(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 14763962000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check",
      "offset": 13
    }
  ],
  "location": "UsersDefination.selects_the_of_checkbox_of_Send_User_Notification_field_as_check_uncheck(String)"
});
formatter.result({
  "duration": 5001278100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Agent",
      "offset": 9
    }
  ],
  "location": "UsersDefination.selects_from_the_list(String)"
});
formatter.result({
  "duration": 6219891700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_new_User_button()"
});
formatter.result({
  "duration": 6724663800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username is invalid",
      "offset": 16
    },
    {
      "val": "\u0026^%$%\u0026",
      "offset": 102
    },
    {
      "val": "anu@gmail.com",
      "offset": 115
    }
  ],
  "location": "UsersDefination.admin_receives_after_entering_the_details_of_user_whose_username_and_email_are_and_reprectively(String,String,String)"
});
formatter.result({
  "duration": 67020300,
  "status": "passed"
});
formatter.after({
  "duration": 997539000,
  "status": "passed"
});
formatter.before({
  "duration": 15627993200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 164781300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 3651013700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 3338000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 177740600,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 10464537300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 8417500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 1693124900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 4581300,
  "status": "passed"
});
formatter.scenario({
  "line": 141,
  "name": "Verify Add new user form with expected validation messages",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-form-with-expected-validation-messages;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 128,
      "name": "@addnew2"
    }
  ]
});
formatter.step({
  "line": 130,
  "name": "admin is on Users page and wants to add new user",
  "keyword": "Given "
});
formatter.step({
  "line": 131,
  "name": "admin clicks on Add New button",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "admin is redirected to Add New User page",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "enters \"null\" , \"null\", \"Anushka\", \"Sharma\",\"www.helpinghands.com\", \"Sampleanu@567\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "selects the \"UnCheck\" of checkbox of Send User Notification field as check/uncheck",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "selects \"Agent\" from the list",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "admin clicks on Add new User button",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "admin receives \"becomes red\" after entering the details of user whose username and email are \"null\" and \"null\" reprectively",
  "matchedColumns": [
    0,
    1,
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_and_wants_to_add_new_user()"
});
formatter.result({
  "duration": 48200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_New_button()"
});
formatter.result({
  "duration": 5242822500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_is_redirected_to_Add_New_User_page()"
});
formatter.result({
  "duration": 8544600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "null",
      "offset": 8
    },
    {
      "val": "null",
      "offset": 17
    },
    {
      "val": "Anushka",
      "offset": 25
    },
    {
      "val": "Sharma",
      "offset": 36
    },
    {
      "val": "www.helpinghands.com",
      "offset": 45
    },
    {
      "val": "Sampleanu@567",
      "offset": 69
    }
  ],
  "location": "UsersDefination.enters(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 14712774900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UnCheck",
      "offset": 13
    }
  ],
  "location": "UsersDefination.selects_the_of_checkbox_of_Send_User_Notification_field_as_check_uncheck(String)"
});
formatter.result({
  "duration": 7105826300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Agent",
      "offset": 9
    }
  ],
  "location": "UsersDefination.selects_from_the_list(String)"
});
formatter.result({
  "duration": 6228902800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_new_User_button()"
});
formatter.result({
  "duration": 5156784600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "becomes red",
      "offset": 16
    },
    {
      "val": "null",
      "offset": 94
    },
    {
      "val": "null",
      "offset": 105
    }
  ],
  "location": "UsersDefination.admin_receives_after_entering_the_details_of_user_whose_username_and_email_are_and_reprectively(String,String,String)"
});
formatter.result({
  "duration": 4088368900,
  "status": "passed"
});
formatter.after({
  "duration": 920202400,
  "status": "passed"
});
formatter.before({
  "duration": 19816139600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 142587100,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 3496115000,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 5440400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 168634800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 10590338700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 5168200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 1824403100,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 4316100,
  "status": "passed"
});
formatter.scenario({
  "line": 142,
  "name": "Verify Add new user form with expected validation messages",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-form-with-expected-validation-messages;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 128,
      "name": "@addnew2"
    }
  ]
});
formatter.step({
  "line": 130,
  "name": "admin is on Users page and wants to add new user",
  "keyword": "Given "
});
formatter.step({
  "line": 131,
  "name": "admin clicks on Add New button",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "admin is redirected to Add New User page",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "enters \"Anushaka25\" , \"anu25abccom\", \"Anushka\", \"Sharma\",\"www.helpinghands.com\", \"Sampleanu@567\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "selects the \"Check\" of checkbox of Send User Notification field as check/uncheck",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "selects \"Agent\" from the list",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "admin clicks on Add new User button",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "admin receives \"email address isn’t correct\" after entering the details of user whose username and email are \"Anushaka25\" and \"anu25abccom\" reprectively",
  "matchedColumns": [
    0,
    1,
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_and_wants_to_add_new_user()"
});
formatter.result({
  "duration": 37900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_New_button()"
});
formatter.result({
  "duration": 5770316000,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_is_redirected_to_Add_New_User_page()"
});
formatter.result({
  "duration": 9907700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anushaka25",
      "offset": 8
    },
    {
      "val": "anu25abccom",
      "offset": 23
    },
    {
      "val": "Anushka",
      "offset": 38
    },
    {
      "val": "Sharma",
      "offset": 49
    },
    {
      "val": "www.helpinghands.com",
      "offset": 58
    },
    {
      "val": "Sampleanu@567",
      "offset": 82
    }
  ],
  "location": "UsersDefination.enters(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 14749704700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check",
      "offset": 13
    }
  ],
  "location": "UsersDefination.selects_the_of_checkbox_of_Send_User_Notification_field_as_check_uncheck(String)"
});
formatter.result({
  "duration": 5012460500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Agent",
      "offset": 9
    }
  ],
  "location": "UsersDefination.selects_from_the_list(String)"
});
formatter.result({
  "duration": 6214749300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_new_User_button()"
});
formatter.result({
  "duration": 7022144200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email address isn’t correct",
      "offset": 16
    },
    {
      "val": "Anushaka25",
      "offset": 110
    },
    {
      "val": "anu25abccom",
      "offset": 127
    }
  ],
  "location": "UsersDefination.admin_receives_after_entering_the_details_of_user_whose_username_and_email_are_and_reprectively(String,String,String)"
});
formatter.result({
  "duration": 87520000,
  "status": "passed"
});
formatter.after({
  "duration": 1308096500,
  "status": "passed"
});
formatter.before({
  "duration": 21905989100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 148369100,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 3274141200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 3717700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 171141500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 11852781200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 8247400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 2052351800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 2093900,
  "status": "passed"
});
formatter.scenario({
  "line": 143,
  "name": "Verify Add new user form with expected validation messages",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-form-with-expected-validation-messages;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 128,
      "name": "@addnew2"
    }
  ]
});
formatter.step({
  "line": 130,
  "name": "admin is on Users page and wants to add new user",
  "keyword": "Given "
});
formatter.step({
  "line": 131,
  "name": "admin clicks on Add New button",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "admin is redirected to Add New User page",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "enters \"Anushaka25\" , \"@gmail.com\", \"Anushka\", \"Sharma\",\"www.helpinghands.com\", \"Sampleanu@567\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "selects the \"Check\" of checkbox of Send User Notification field as check/uncheck",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "selects \"Agent\" from the list",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "admin clicks on Add new User button",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "admin receives \"email address isn’t correct\" after entering the details of user whose username and email are \"Anushaka25\" and \"@gmail.com\" reprectively",
  "matchedColumns": [
    0,
    1,
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_and_wants_to_add_new_user()"
});
formatter.result({
  "duration": 26200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_New_button()"
});
formatter.result({
  "duration": 5517342300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_is_redirected_to_Add_New_User_page()"
});
formatter.result({
  "duration": 4167900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anushaka25",
      "offset": 8
    },
    {
      "val": "@gmail.com",
      "offset": 23
    },
    {
      "val": "Anushka",
      "offset": 37
    },
    {
      "val": "Sharma",
      "offset": 48
    },
    {
      "val": "www.helpinghands.com",
      "offset": 57
    },
    {
      "val": "Sampleanu@567",
      "offset": 81
    }
  ],
  "location": "UsersDefination.enters(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 14940417400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check",
      "offset": 13
    }
  ],
  "location": "UsersDefination.selects_the_of_checkbox_of_Send_User_Notification_field_as_check_uncheck(String)"
});
formatter.result({
  "duration": 5009917800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Agent",
      "offset": 9
    }
  ],
  "location": "UsersDefination.selects_from_the_list(String)"
});
formatter.result({
  "duration": 7026100500,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_new_User_button()"
});
formatter.result({
  "duration": 7607813600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email address isn’t correct",
      "offset": 16
    },
    {
      "val": "Anushaka25",
      "offset": 110
    },
    {
      "val": "@gmail.com",
      "offset": 127
    }
  ],
  "location": "UsersDefination.admin_receives_after_entering_the_details_of_user_whose_username_and_email_are_and_reprectively(String,String,String)"
});
formatter.result({
  "duration": 171083300,
  "status": "passed"
});
formatter.after({
  "duration": 1195719400,
  "status": "passed"
});
formatter.before({
  "duration": 24567459300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 143693700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 3369979100,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 14798200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 230993700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 14854602900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 5291100,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 1792451400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 5970000,
  "status": "passed"
});
formatter.scenario({
  "line": 144,
  "name": "Verify Add new user form with expected validation messages",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-add-new-user-form-with-expected-validation-messages;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 128,
      "name": "@addnew2"
    }
  ]
});
formatter.step({
  "line": 130,
  "name": "admin is on Users page and wants to add new user",
  "keyword": "Given "
});
formatter.step({
  "line": 131,
  "name": "admin clicks on Add New button",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "admin is redirected to Add New User page",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "enters \"Anushaka25\" , \"example@gmail..com\", \"Anushka\", \"Sharma\",\"www.helpinghands.com\", \"Sampleanu@567\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "selects the \"UnCheck\" of checkbox of Send User Notification field as check/uncheck",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "selects \"Agent\" from the list",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "admin clicks on Add new User button",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "admin receives \"email address isn’t correct\" after entering the details of user whose username and email are \"Anushaka25\" and \"example@gmail..com\" reprectively",
  "matchedColumns": [
    0,
    1,
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_and_wants_to_add_new_user()"
});
formatter.result({
  "duration": 65900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_New_button()"
});
formatter.result({
  "duration": 6125358700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_is_redirected_to_Add_New_User_page()"
});
formatter.result({
  "duration": 10898600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anushaka25",
      "offset": 8
    },
    {
      "val": "example@gmail..com",
      "offset": 23
    },
    {
      "val": "Anushka",
      "offset": 45
    },
    {
      "val": "Sharma",
      "offset": 56
    },
    {
      "val": "www.helpinghands.com",
      "offset": 65
    },
    {
      "val": "Sampleanu@567",
      "offset": 89
    }
  ],
  "location": "UsersDefination.enters(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 14728267900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UnCheck",
      "offset": 13
    }
  ],
  "location": "UsersDefination.selects_the_of_checkbox_of_Send_User_Notification_field_as_check_uncheck(String)"
});
formatter.result({
  "duration": 7083433100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Agent",
      "offset": 9
    }
  ],
  "location": "UsersDefination.selects_from_the_list(String)"
});
formatter.result({
  "duration": 6486739400,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Add_new_User_button()"
});
formatter.result({
  "duration": 7170966600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email address isn’t correct",
      "offset": 16
    },
    {
      "val": "Anushaka25",
      "offset": 110
    },
    {
      "val": "example@gmail..com",
      "offset": 127
    }
  ],
  "location": "UsersDefination.admin_receives_after_entering_the_details_of_user_whose_username_and_email_are_and_reprectively(String,String,String)"
});
formatter.result({
  "duration": 102484900,
  "status": "passed"
});
formatter.after({
  "duration": 1132174200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 147,
  "name": "Verify screen options functionality on Users page",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-screen-options-functionality-on-users-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 146,
      "name": "@screenopt"
    }
  ]
});
formatter.step({
  "line": 148,
  "name": "admin is on Users page in order to use screen options functionality",
  "keyword": "Given "
});
formatter.step({
  "line": 149,
  "name": "admin clicks on Screen Options",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "Columns and Pagination options get displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 151,
  "name": "admin selects the checkboxes of \"Email\" , \"Role\" and deselects the checkbox of \"Posts\"",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "admin verifies that \"Email\" and \"Role\" columns are displayed and \"Posts\" column is not displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "admin enters a numerical value \"\u003cNo\u003e\" in Number of items per page field",
  "keyword": "When "
});
formatter.step({
  "line": 154,
  "name": "clicks on Apply button which is available under Pagination option",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "admin is able to see only \"\u003cNo\u003e\" number of user records on Users page",
  "keyword": "Then "
});
formatter.examples({
  "line": 156,
  "name": "",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-screen-options-functionality-on-users-page;",
  "rows": [
    {
      "cells": [
        "No"
      ],
      "line": 157,
      "id": "automating-the-users-module-of-real-estate-application;verify-screen-options-functionality-on-users-page;;1"
    },
    {
      "cells": [
        "3"
      ],
      "line": 158,
      "id": "automating-the-users-module-of-real-estate-application;verify-screen-options-functionality-on-users-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 21383578000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login into the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on real estate application page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin clicks on LOG IN/REGISTER option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin navigates to My Profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enters username as \"mohankrishna176@gmail.com\" and password as \"Secret@123\u0026\u0026\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "admin navigates to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Users option from the menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin navigates to Users page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_real_estate_application_page()"
});
formatter.result({
  "duration": 182945000,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_LOG_IN_REGISTER_option()"
});
formatter.result({
  "duration": 3519141300,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_My_Profile_page()"
});
formatter.result({
  "duration": 8776100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 20
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 64
    }
  ],
  "location": "UsersDefination.enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 190696800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 9737616800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 3527000,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Users_option_from_the_menu()"
});
formatter.result({
  "duration": 1921299200,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_navigates_to_Users_page()"
});
formatter.result({
  "duration": 2939500,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "Verify screen options functionality on Users page",
  "description": "",
  "id": "automating-the-users-module-of-real-estate-application;verify-screen-options-functionality-on-users-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 146,
      "name": "@screenopt"
    }
  ]
});
formatter.step({
  "line": 148,
  "name": "admin is on Users page in order to use screen options functionality",
  "keyword": "Given "
});
formatter.step({
  "line": 149,
  "name": "admin clicks on Screen Options",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "Columns and Pagination options get displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 151,
  "name": "admin selects the checkboxes of \"Email\" , \"Role\" and deselects the checkbox of \"Posts\"",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "admin verifies that \"Email\" and \"Role\" columns are displayed and \"Posts\" column is not displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "admin enters a numerical value \"3\" in Number of items per page field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 154,
  "name": "clicks on Apply button which is available under Pagination option",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "admin is able to see only \"3\" number of user records on Users page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UsersDefination.admin_is_on_Users_page_in_order_to_use_screen_options_functionality()"
});
formatter.result({
  "duration": 49700,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.admin_clicks_on_Screen_Options()"
});
formatter.result({
  "duration": 2099851900,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.columns_and_Pagination_options_get_displayed()"
});
formatter.result({
  "duration": 88922300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 33
    },
    {
      "val": "Role",
      "offset": 43
    },
    {
      "val": "Posts",
      "offset": 80
    }
  ],
  "location": "UsersDefination.admin_selects_the_checkboxes_of_and_deselects_the_checkbox_of(String,String,String)"
});
formatter.result({
  "duration": 154129700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 21
    },
    {
      "val": "Role",
      "offset": 33
    },
    {
      "val": "Posts",
      "offset": 66
    }
  ],
  "location": "UsersDefination.admin_verifies_that_and_columns_are_displayed_and_column_is_not_displayed(String,String,String)"
});
formatter.result({
  "duration": 108139500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 32
    }
  ],
  "location": "UsersDefination.admin_enters_a_numerical_value_in_Number_of_items_per_page_field(String)"
});
formatter.result({
  "duration": 88985800,
  "status": "passed"
});
formatter.match({
  "location": "UsersDefination.clicks_on_Apply_button_which_is_available_under_Pagination_option()"
});
formatter.result({
  "duration": 3905262600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "UsersDefination.admin_is_able_to_see_only_number_of_user_records_on_Users_page(String)"
});
formatter.result({
  "duration": 18950400,
  "status": "passed"
});
formatter.after({
  "duration": 975048000,
  "status": "passed"
});
});