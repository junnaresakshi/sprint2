Feature: Automating the Users module of real estate application

  Background: Login into the application
    Given Admin is on real estate application page
    When admin clicks on LOG IN/REGISTER option
    Then admin navigates to My Profile page
    And enters username as "amit92luthra" and password as "admin@987654321"
    And clicks on Sign In button
    Then admin navigates to dashboard page
    And clicks on Users option from the menu
    Then admin navigates to Users page

  @search
  Scenario Outline: Verify search functionality
    Given admin is on Users page in order to serch the user records
    When admin creates three new user records having "<username1>","<emailid1>","<password1>","<rolename1>","<username2>","<emailid2>","<password2>","<rolename2>","<username3>","<emailid3>","<password3>","<rolename3>"
    And clicks on a link having name of the role as "<role>" to search the user records based on that role
    Then all records having role name as "<role>" get displayed
    And admin clicks on "<AllLink>" to see all the available user records
    And enters any "<Word>" in the search box
    And clicks on Search Users button
    Then required user records having substring as "<Word>", get displayed

    Examples: 
      | username1  | emailid1       | password1       | rolename1 | username2 | emailid2             | password2    | rolename2 | username3  | emailid3             | password3     | rolename3 | role   | AllLink | Word   |
      | Samiksha55 | samu@gamil.com | DemoSamiksha&55 | Editor    | Saurabh56 | SampleSaru@gmail.com | PassParu@289 | Editor    | DemoUserID | uniquemail@gmail.com | Uniquedemo@57 | Author    | Editor | All     | unique |

  @bulk
  Scenario Outline: Verify Bulk Actions functionality on Users page
    Given admin is on Users page in order to use bulk actions functionality
    When admin adds two new users having "<Username1>", "<email1>","<Pass1>", "<role1>" and "<Username2>", "<email2>","<Pass2>","<role2>" respectively
    And clicks on chechbox of user records having username as "<Username1>" and "<Username2>"
    And clicks on bulk actions list and selects delete option from the list
    And clicks on apply button in order to delete the selected records
    Then admin navigates to Delete Users page
    And clicks on Confirm deletion button
    Then admin again navigates to Users page
    And receives validation message on successful deletion of the selected records

    Examples: 
      | Username1 | email1               | Pass1          | role1       | Username2 | email2               | Pass2           | role2  |
      | Aaaditi88 | demoaditti@gmail.com | Demoaddu@test3 | Contributor | A@aavani  | test3avani@gmail.com | AvaniDemo@test4 | Author |

  @changeto
  Scenario Outline: Verify Change role to functionality on Users page
    Given admin is on Users page in order to change the role of selected users through change role to functionality
    When admin creates two new user records having "<User_n1>", "<email_id1>","<Password1>", "<role_n1>" and "<User_n2>", "<email_id2>","<Password2>","<role_n2>" respectively
    And clicks on the checkboxes of required user records having username as "<User_n1>" and "<User_n2>"
    And clicks on Change role to list and selects "<NewRole>" option from the list
    And clicks on Change button
    Then admin receives validation message of successful change in the role of selected user records
    And confirms that the role of user records having "<User_n1>", "<User_n2>" are changed to "<NewRole>"

    Examples: 
      | User_n1   | email_id1       | Password1       | role_n1     | User_n2   | email_id2             | Password2           | role_n2 | NewRole  |
      | 10Deepika | deepa@gmail.com | Demodeepa@test5 | Contributor | 25Aadvika | test5advika@gmail.com | AadvikaSample@test5 | Author  | Customer |

  @editview
  Scenario Outline: Verify edit and view options of admin record
    Given admin is present on Users page
    When admin clicks on "Edit" option available below the username as "admin"
    Then admin navigates to Profile page in order to edit the details of admin
    And changes the firstname and lastname to "<NewFirstName>" and "<NewLastName>" respectively
    And clicks on Update Profile button
    Then admin receives "<Validation_message>" on the same page after successfully updating the details
    When admin clicks on Users option from the main menu
    Then Users page gets displayed
    And admin clicks on "View" option available below the username "admin"
    Then admin navigates to his/her profile page and verifies firstname and lastname with updated values as "<NewFirstName>" and "<NewLastName>"
    And clicks on "Details" option of any specific available property
    Then admin navigates to the page which is showing all the details of selected property

    Examples: 
      | NewFirstName | NewLastName | Validation_message |
      | Aman         | Singh       | Profile updated.   |

  @editdeleteview
  Scenario Outline: Verify edit, delete and view options which are available below the username of each user record except admin record
    Given admin is on Users page in order to edit, view and delete any user record
    When admin creates a new user-record having "<UserName>", "<Email>", "<FirstName>", "<LastName>","<Password>"
    And clicks on "Edit" which is available below the "<UserName>"
    Then admin is redirected to Edit User page for the purpose of editing the details
    And changes the values of firstname, lastname and email with "<NewFName>", "<NewLName>" and "<NewEmail>" respectively and clicks on the Update User button
    Then after successful updation, admin receives "<Edit_ValidationMsg>"
    And clicks on Back to Users link
    Then admin is redirected to Users page
    When admin clicks on the option named as "View" which is available below the "<UserName>"
    Then admin navigates to profile page and verifies firstname, lastname and email with modified values as "<NewFName>","<NewLName>" and "<NewEmail>" respectively
    And clicks on Dashboard option from Real Estate list which is available on upper bar of the profile page
    Then admin is redirected to Dashboard
    And clicks on the option named as Users from the main menu
    Then again Users page gets displayed
    When admin clicks on "Delete" option available below the "<UserName>"
    Then admin is redirected to Delete Users page
    And Confirm Deletion button is clicked by admin
    Then admin is again redirected to Users page
    And receives "<Delete_ValidationMsg>" after successful deletion of required user record

    Examples: 
      | UserName  | Email          | FirstName | LastName | Password       | NewFName | NewLName | NewEmail           | Edit_ValidationMsg | Delete_ValidationMsg |
      | 90Aaditya | aadi@gmail.com | Aaditya   | Kulkarni | AadiSample@901 | Aakash   | Jadhav   | aakash33@gmail.com | User updated.      | User deleted.        |

  @addnew1
  Scenario Outline: Verify Add new user functionality with valid and invalid inputs
    Given admin is on Users page for the purpose of adding new user
    When admin clicks on Add New option from the main menu
    Then admin navigates to Add New User page
    And enters "<UserName>" , "<Email>", "<Firstname>", "<Lastname>","<WebsiteName>", "<Password>" in the respective input fields
    And selects "<status>" as check/uncheck for the checkbox of Send User Notification field and selects "<rolename>" from Role list
    And clicks on Add New User button after filling the form
    Then admin goes to Users page
    And receives "<AddNew_Validation_Msg>" after successfully adding the new user having details as "<UserName>" , "<Email>", "<Firstname>", "<Lastname>","<WebsiteName>"

    Examples: 
      | UserName     | Email                | Firstname                                           | Lastname                                            | WebsiteName       | Password         | Status  | rolename     | AddNew_Validation_Msg |
      | Vinay23      | 1234567890@gmail.com | vinay                                               | joshi                                               | www.sample.com    | vinayjoshiRTY@23    | UnCheck | Customer     | New user created.     |
      | 764323557 | _______@rediff.com   | Bhakti                                              | Mali                                                | www.education.in  | bhaktiDemo$28    | UnCheck | Agent        | New user created.     |
      | 35Akshay53   | akshay@gmail.com     | Akshay35                                            | 53Akshay                                            | www./demo.com     | akshayDemo$56    | Check | Customer     | New user created.     |
      | 86Purnima    | demo@gmail.com       | null                                                | null                                                | www.rediff.com    | hsgdys^%65TRF878 | UnCheck | Editor       | New user created.     |
      | aa78@sanu    | .sanu123@gmail.com   | sanu                                                | khanna                                              | www.mydemo.com    | Ashwinidemo@2399 | UnCheck | Shop manager | New user created.     |
      | aakshu78i    | aakshu897.@gmail.com | akshu                                               | sharma                                              | www.sampleweb.com | hjdgcjys@56GH    | UnCheck | Editor       | New user created.     |
      | kittu45      | sammy67@gmail.com    | *%@#$&                                              | sammy                                               | www.sammy.com     | hsgdh767SD@ty    | UnCheck | Author       | New user created.     |
      | aman.singh   | aman@gmail.com       | aman                                                | ^&^%@&                                              | www.natures.com   | bgsdhc67DSD@gf   | Check | Author       | New user created.     |
      | kavita45     | kavi@gmail.com       | kavi                                                | dchsgdhgfvuysg45ghsaycdgshzbch56vhgvfhgf6fhygfjgjhh | www.kaviweb.com   | jhdjhfs767@TF    | UnCheck | Author       | New user created.     |
      | savita67     | savi@gmail.com       | dchsgdhgfvuygvshgahvcgshhsaycdgsvhgvfhgfjhjhuyutunk | joshi                                               | www.savidemo.com  | hfbvhGHFYT@546   | UnCheck | Customer     | New user created.     |
      | sagar_user   | sagar@gmail.com      | sagar                                               | thakur                                              | wwwdotlesscom     | jhsvhjYGUY@768   | UnCheck | Author       | New user created.     |

  @addnew2
  Scenario Outline: Verify Add new user form with expected validation messages
    Given admin is on Users page and wants to add new user
    When admin clicks on Add New button
    Then admin is redirected to Add New User page
    And enters "<UserName>" , "<Email>", "<Firstname>", "<Lastname>","<WebsiteName>", "<Password>"
    And selects the "<status>" of checkbox of Send User Notification field as check/uncheck
    And selects "<role>" from the list
    When admin clicks on Add new User button
    Then admin receives "<validation_Msg/Action>" after entering the details of user whose username and email are "<UserName>" and "<Email>" reprectively
    Examples: 
      | UserName   | Email                      | Firstname | Lastname | WebsiteName          | Password      | status | role  | validation_Msg/Action       |
      | &^%$%&     | anu@gmail.com              | Anushka   | Sharma   | www.helpinghands.com | Sampleanu@567 | Check  | Agent | username is invalid         |
      | null       | null              | Anushka   | Sharma   | www.helpinghands.com | Sampleanu@567 | UnCheck  | Agent | becomes red                 |
      | Anushaka25 | anu25abccom                | Anushka   | Sharma   | www.helpinghands.com | Sampleanu@567 | Check  | Agent | email address isn’t correct |
      | Anushaka25 | @gmail.com                 | Anushka   | Sharma   | www.helpinghands.com | Sampleanu@567 | Check  | Agent | email address isn’t correct |
      | Anushaka25 | example@gmail..com         | Anushka   | Sharma   | www.helpinghands.com | Sampleanu@567 | UnCheck  | Agent | email address isn’t correct |
    
  
