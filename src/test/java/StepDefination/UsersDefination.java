package StepDefination;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.hook;
import junit.framework.Assert;

public class UsersDefination {
	WebDriver driver = hook.driver;
	@Given("^Admin is on real estate application page$")
	public void admin_is_on_real_estate_application_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
		System.out.println("Application window has initialised");
		driver.manage().window().maximize();
		}
		catch(Exception e)
		{
			System.out.println("Error: "+e);
			Assert.fail();
		}
	}

	@When("^admin clicks on LOG IN/REGISTER option$")
	public void admin_clicks_on_LOG_IN_REGISTER_option() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
			driver.findElement(By.xpath("//a[@class='sign-in']")).click();
			System.out.println("Admin clicks on LOG IN/REGISTER");
		}
		catch(Exception e)
		{
			System.out.println("Error: "+e);
			Assert.fail();
		}
	  
	}

	@Then("^admin navigates to My Profile page$")
	public void admin_navigates_to_My_Profile_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
	    {
	    	String exp="My Profile – Real Estate";
	    	String ac = driver.getTitle();
	    	System.out.println("Actual title of my profile page : "+ac);
	    	Assert.assertEquals(exp,ac);
	    	System.out.println("Admin is on My Profile page");
	    }
	    catch(Exception e)
		 {
			 System.out.println("Error :"+e);
			 Assert.fail();
		 }

	}

	@Then("^enters username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void enters_username_as_and_password_as(String un, String pwrd) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	driver.findElement(By.name("log")).sendKeys(un);
	    	driver.findElement(By.name("pwd")).sendKeys(pwrd);
	    	System.out.println("admin enters username and password");
	    }
	    catch(Exception e)
	    {
	    	 System.out.println("Error :"+e);
	    	 Assert.fail();
	    }
	}

	@Then("^clicks on Sign In button$")
	public void clicks_on_Sign_In_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
		 driver.findElement(By.name("login")).click();
		 System.out.println("admin clicks on sign in button");
		}
		catch(Exception e)
		{
			System.out.println("Error :"+e);
			Assert.fail();
		}
	}

	@Then("^admin navigates to dashboard page$")
	public void admin_navigates_to_dashboard_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
	    {
	    	String expect="Dashboard ‹ Real Estate — WordPress";
	    	String actual = driver.getTitle();
	    	Assert.assertEquals(expect, actual);
	    	System.out.println("Admin is on dashboard");
	    }
	    catch(Exception e)
		 {
			 System.out.println("Error :"+e);
			 Assert.fail();
		 }
	}

	@Then("^clicks on Users option from the menu$")
	public void clicks_on_Users_option_from_the_menu() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	driver.findElement(By.xpath("//div[text()='Users']")).click();
	    	System.out.println("admin clicks on Users");
	    	
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Error :"+e);
	    	Assert.fail();
	    }
	}

	@Then("^admin navigates to Users page$")
	public void admin_navigates_to_Users_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		try
	    {
	    	String expect="Users ‹ Real Estate — WordPress";
	    	String actual = driver.getTitle();
	    	Assert.assertEquals(expect, actual);
	    	System.out.println("Admin is successfully navigated to Users page");
	    	System.out.println();
	    }
	    catch(Exception e)
		 {
			 System.out.println("Error :"+e);
			 Assert.fail();
		 }
	}
	//*********************************** Search **************************************************
	@Given("^admin is on Users page in order to serch the user records$")
	public void admin_is_on_Users_page_in_order_to_serch_the_user_records() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	System.out.println("Admin wants to search user records. ");
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Error: "+e);
	    	Assert.fail();
	    }
	}

	@When("^admin creates three new user records having \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void admin_creates_three_new_user_records_having(String u1, String e1, String p1, String r1, String u2, String e2, String p2, String r2, String u3, String e3, String p3, String r3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	//creating 1st user record
			driver.findElement(By.xpath("//a[@class='page-title-action']")).click();
			System.out.println("Clicked on Add New button");
			
			//System.out.println("After clicking on 'Add New' button, admin navigates to 'Add New User' page ");
			driver.findElement(By.xpath("//input[@id='user_login']")).sendKeys(u1);
			driver.findElement(By.xpath("//input[@id='email']")).sendKeys(e1);
			System.out.println("username and email entered");
			Thread.sleep(5000);
			
			driver.findElement(By.xpath("//button[text()='Show password']")).click();
			Thread.sleep(2000);
			driver.findElement(By.xpath("//input[@id='pass1-text']")).sendKeys(p1);
			System.out.println("pass1 entered");
			Thread.sleep(3000);
			
			WebElement d=driver.findElement(By.xpath("//*[@name='role']"));
			d.click();
			Thread.sleep(5000);
			Select sobj1=new Select(d);
			sobj1.selectByVisibleText(r1);
			System.out.println("Role1 selected");
			
			driver.findElement(By.xpath("//input[@id='createusersub']")).click();
			Thread.sleep(8000);
			System.out.println("First user created");
				
			//creating 2nd user record
			driver.findElement(By.xpath("//a[@class='page-title-action']")).click();
			System.out.println("Clicked on Add New button");
			
			driver.findElement(By.xpath("//input[@id='user_login']")).sendKeys(u2);
			driver.findElement(By.xpath("//input[@id='email']")).sendKeys(e2);
			Thread.sleep(5000);
			
			driver.findElement(By.xpath("//button[text()='Show password']")).click();
			Thread.sleep(2000);
			driver.findElement(By.xpath("//input[@id='pass1-text']")).sendKeys(p2);
			System.out.println("pass2 entered");
			Thread.sleep(3000);
			
			driver.findElement(By.xpath("//*[@name='role']")).click();
			Thread.sleep(3000);
			Select sobj2=new Select(driver.findElement((By.name("role"))));
			sobj2.selectByVisibleText(r2);
			System.out.println("Role2 selected");
			
			driver.findElement(By.xpath("//input[@id='createusersub']")).click();
			Thread.sleep(10000);
			System.out.println("Second user created");
			
			//creating 3rd user
			driver.findElement(By.xpath("//a[@class='page-title-action']")).click();
			System.out.println("Clicked on Add New button");
			
			//System.out.println("After clicking on 'Add New' button, admin navigates to 'Add New User' page ");
			driver.findElement(By.xpath("//input[@id='user_login']")).sendKeys(u3);
			driver.findElement(By.xpath("//input[@id='email']")).sendKeys(e3);
			Thread.sleep(5000);
			System.out.println("username and email entered");
			
			driver.findElement(By.xpath("//button[text()='Show password']")).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@id='pass1-text']")).sendKeys(p3);
			System.out.println("pass3 entered");
	
			WebElement dw=driver.findElement(By.xpath("//*[@name='role']"));
			dw.click();
			Thread.sleep(5000);
			Select so=new Select(dw);
			so.selectByVisibleText(r3);
			System.out.println("Role3 selected");
			Thread.sleep(3000);
			
			driver.findElement(By.xpath("//input[@id='createusersub']")).click();
			Thread.sleep(10000);
			System.out.println("Third user created");
			Thread.sleep(3000);
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Error: "+e);
	    	Assert.fail();
	    }
	}

	@When("^clicks on a link having name of the role as \"([^\"]*)\" to search the user records based on that role$")
	public void clicks_on_a_link_having_name_of_the_role_as_to_search_the_user_records_based_on_that_role(String rstr) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String str=rstr+" ";
	    try
	    {
	    	driver.findElement(By.xpath("//a[contains(text(),'"+str+"')]")).click();//a[contains(text(),'Editor ')]
			System.out.println("Admin clicks on "+rstr+" link");
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Error: "+e);
	    	Assert.fail();
	    }
	}

	@Then("^all records having role name as \"([^\"]*)\" get displayed$")
	public void all_records_having_role_name_as_get_displayed(String rolename) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
			List<WebElement> ele=driver.findElements(By.xpath("//td[@data-colname='Role']"));   
			String str;
			for(int i=0;i<ele.size();i++)
			{
				WebElement eobj=ele.get(i);
				str=eobj.getText();
				if(str.equals(rolename)){
					//do nothing
				}
				else{
					System.out.println("Incorrect searched record");
					Assert.fail();
					break;
				}
			
				System.out.println("User-record"+(i+1)+" having role as "+rolename+", is found out");
			}
		}
		 catch(Exception e)
	    {
	    	System.out.println("Error: "+e);
	    	Assert.fail();
	    }
	}

	@Then("^admin clicks on \"([^\"]*)\" to see all the available user records$")
	public void admin_clicks_on_to_see_all_the_available_user_records(String link) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String s=link+" ";
		try
		{
			Thread.sleep(5000);
		driver.findElement(By.xpath("//a[text()='"+s+"']")).click();
		System.out.println("Then, admin clicks on the link named as "+link);
		}
		catch(Exception e)
		{
			System.out.println("Error"+e);
			Assert.fail();
		}
	}

	@Then("^enters any \"([^\"]*)\" in the search box$")
	public void enters_any_in_the_search_box(String wrd) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 try
		   {
			   driver.findElement(By.xpath("//input[@name='s']")).sendKeys(wrd);
			   System.out.println("Admin enters "+wrd+" in the search box");
		   }
		   catch(Exception e)
			{
				System.out.println("Error"+e);
				Assert.fail();
			}
	   
	}

	@Then("^clicks on Search Users button$")
	public void clicks_on_Search_Users_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
		driver.findElement(By.xpath("//input[@id='search-submit']")).click();
		System.out.println("Admin clicks on search users button");
		}
		catch(Exception e)
		{
			System.out.println("Error"+e);
			Assert.fail();
		}
	   
	}

	@Then("^required user records having substring as \"([^\"]*)\", get displayed$")
	public void required_user_records_having_substring_as_get_displayed(String strwrd) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
	    {
	    	
			WebElement e1=driver.findElement(By.xpath("//a[contains(text(),'"+strwrd+"')]"));
			String found=e1.getText();
	    	Boolean b=e1.isDisplayed();
	    	if(b)
	    	{
	    	System.out.println("Record found having value as "+found+" which is containing substring "+strwrd);
	    	System.out.println();
	    	}
	    	else
	    	{
	    		System.out.println("Record not found");
	    		Assert.fail();
	    	}
	    	
	    }
	    catch(Exception e)
		{
			System.out.println("Error"+e);
			Assert.fail();
		}
	}
	
	
	//************************************************** Bulk Actions *******************************************************
	@Given("^admin is on Users page in order to use bulk actions functionality$")
	public void admin_is_on_Users_page_in_order_to_use_bulk_actions_functionality() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	System.out.println("Admin wants to use bulk actions functionality in order to delete required user records");
	    }
	    catch(Exception e)
		{
			System.out.println("Error"+e);
			Assert.fail();
		}
	}

	@When("^admin adds two new users having \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" respectively$")
	public void admin_adds_two_new_users_having_and_respectively(String u1, String e1, String p1, String r1, String u2, String e2, String p2, String r2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
			//creating 1st user record
			driver.findElement(By.xpath("//a[@class='page-title-action']")).click();
			System.out.println("Clicked on Add New button");
			
			//System.out.println("After clicking on 'Add New' button, admin navigates to 'Add New User' page ");
			driver.findElement(By.xpath("//input[@id='user_login']")).sendKeys(u1);
			driver.findElement(By.xpath("//input[@id='email']")).sendKeys(e1);
			System.out.println("username and password entered");
			Thread.sleep(5000);
			
			driver.findElement(By.xpath("//button[text()='Show password']")).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@id='pass1-text']")).sendKeys(p1);
			System.out.println("pass1 entered");
			Thread.sleep(3000);
		
			WebElement d=driver.findElement(By.xpath("//*[@name='role']"));
			d.click();
			Thread.sleep(3000);
			Select sobj1=new Select(d);
			sobj1.selectByVisibleText(r1);
			System.out.println("Role1 selected");
			Thread.sleep(3000);
			
			driver.findElement(By.xpath("//input[@id='createusersub']")).click();
			Thread.sleep(6000);
			System.out.println("First user created");
				
				//creating 2nd user record
			driver.findElement(By.xpath("//a[@class='page-title-action']")).click();
			System.out.println("Clicked on Add New button");
			
			
			driver.findElement(By.xpath("//input[@id='user_login']")).sendKeys(u2);
			driver.findElement(By.xpath("//input[@id='email']")).sendKeys(e2);
			System.out.println("username and password entered");
			Thread.sleep(5000);
			
			driver.findElement(By.xpath("//button[text()='Show password']")).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@id='pass1-text']")).sendKeys(p2);
			System.out.println("pass2 entered");
			
			driver.findElement(By.xpath("//*[@name='role']")).click();
			Thread.sleep(3000);
			Select sobj2=new Select(driver.findElement((By.name("role"))));
			sobj2.selectByVisibleText(r2);
			System.out.println("Role2 selected");
			Thread.sleep(3000);
			
			driver.findElement(By.xpath("//input[@id='createusersub']")).click();
			Thread.sleep(6000);
			System.out.println("Second user created");
			//System.out.println("New users added successfully and admin is on 'Users' page now");
			
		}	
		catch(Exception e)
		{
			System.out.println("Error :"+e);
			Assert.fail();
		}
	    
	}

	@When("^clicks on chechbox of user records having username as \"([^\"]*)\" and \"([^\"]*)\"$")
	public void clicks_on_chechbox_of_user_records_having_username_as_and(String un1, String un2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
	    {
	    	driver.findElement(By.xpath("//a[text()='"+un1+"']/../../../th/input")).click();
	    	System.out.println(un1+" selected");
	    	Thread.sleep(5000);
	    	driver.findElement(By.xpath("//a[text()='"+un2+"']/../../../th/input")).click();
	    	System.out.println(un2+" selected");
	    	System.out.println("Required user records are selected by clicking on respective checkboxes");
	   
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Error :"+e);
	    	Assert.fail();
	    }
	}

	@When("^clicks on bulk actions list and selects delete option from the list$")
	public void clicks_on_bulk_actions_list_and_selects_delete_option_from_the_list() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
	    {
	    	WebElement d1=driver.findElement(By.xpath("//select[@id='bulk-action-selector-top']"));
	    	d1.click();
	    	Thread.sleep(5000);
	    	Select sc=new Select(d1);
	 		sc.selectByVisibleText("Delete");
	 		System.out.println("Delete option is selected from bulk actions list");
	    	
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Error :"+e);
	    	Assert.fail();
	    }
	}

	@When("^clicks on apply button in order to delete the selected records$")
	public void clicks_on_apply_button_in_order_to_delete_the_selected_records() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		  try
		   {
			   driver.findElement(By.xpath("//input[@id='doaction']")).click();
			   System.out.println("Clicked on Apply button");
		   }
		   catch(Exception e)
		   {
			   System.out.println("Error :"+e);
	   		   Assert.fail();
		   }
	  
	}

	@Then("^admin navigates to Delete Users page$")
	public void admin_navigates_to_Delete_Users_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
	    {
	    	WebElement we=driver.findElement(By.xpath("//input[@id='submit']"));
	    	boolean b1=we.isDisplayed();
	    	if(b1)
	    	{
	    		System.out.println("Admin is on Delete Users page");
	    	}
	    	else
	    	{
	    		System.out.println("Admin is not on Delete Users page");
	    		Assert.fail();
	    	}
	    }
	    catch(Exception e)
		   {
			   System.out.println("Error :"+e);
	   		   Assert.fail();
		   }
	}

	@Then("^clicks on Confirm deletion button$")
	public void clicks_on_Confirm_deletion_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 try
		    {
		    	driver.findElement(By.xpath("//input[@id='submit']")).click();
		    	System.out.println("Clicked on confirm deletion button");
		    }
		    catch(Exception e)
			   {
				   System.out.println("Error :"+e);
		   		   Assert.fail();
			   }
	}

	@Then("^admin again navigates to Users page$")
	public void admin_again_navigates_to_Users_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
	    {
	    	String expect="Users ‹ Real Estate — WordPress";
	    	String actual = driver.getTitle();
	    	Assert.assertEquals(expect, actual);
	    	System.out.println("Admin is on Users page after deleting records");
	    }
	    catch(Exception e)
		   {
			   System.out.println("Error :"+e);
	   		   Assert.fail();
		   }
	}

	@Then("^receives validation message on successful deletion of the selected records$")
	public void receives_validation_message_on_successful_deletion_of_the_selected_records() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
	    {
	    	WebElement element=driver.findElement(By.xpath("//p[contains(text(),'users deleted.')]"));
	    	String res=element.getText();
	    	System.out.println("Validation message recieved after deleting records : "+res);
	    	System.out.println();
	    	
	    	
	    }
	    catch(Exception e)
		   {
			   System.out.println("Error :"+e);
	   		   Assert.fail();
		   }
	}
	
	//********************************************* Change role to... ********************************************************
	
	
	@Given("^admin is on Users page in order to change the role of selected users through change role to functionality$")
	public void admin_is_on_Users_page_in_order_to_change_the_role_of_selected_users_through_change_role_to_functionality() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	WebElement web = driver.findElement(By.xpath("//*[@name='new_role']"));
	    	Boolean bres=web.isDisplayed();
	    	if(bres)
	    	{
	    		System.out.println("Admin is on Users page in order to use change role to... functionality");
	    	}
	    	else
	    	{
	    		System.out.println("User is not on Users page");
	    	}
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Error: "+e);
	    	Assert.fail();
	    }
	}

	@When("^admin creates two new user records having \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" respectively$")
	public void admin_creates_two_new_user_records_having_and_respectively(String user1, String eid1, String pswrd1, String rn1, String user2, String eid2, String pswrd2, String rn2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
			//creating 1st user record
			driver.findElement(By.xpath("//a[@class='page-title-action']")).click();
			Thread.sleep(3000);
			System.out.println("Clicked on Add New button");
			
			driver.findElement(By.xpath("//input[@id='user_login']")).sendKeys(user1);
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@id='email']")).sendKeys(eid1);
			Thread.sleep(3000);
			System.out.println("Username and email entered");
			
			driver.findElement(By.xpath("//button[text()='Show password']")).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@id='pass1-text']")).sendKeys(pswrd1);
			Thread.sleep(3000);
			System.out.println("pass1 entered");
			
			WebElement w1=driver.findElement(By.xpath("//*[@name='role']"));
			w1.click();
			Thread.sleep(5000);
			Select s1=new Select(w1);
			s1.selectByVisibleText(rn1);
			System.out.println("Role1 selected");
			
			driver.findElement(By.xpath("//input[@id='createusersub']")).click();
			Thread.sleep(10000);
			System.out.println("First user created");
			System.out.println("----------------------------------------");
				
				//creating 2nd user record
			driver.findElement(By.xpath("//a[@class='page-title-action']")).click();
			System.out.println("Clicked on Add New button");
			
			driver.findElement(By.xpath("//input[@id='user_login']")).sendKeys(user2);
			driver.findElement(By.xpath("//input[@id='email']")).sendKeys(eid2);
			System.out.println("Username and email entered");
			
			driver.findElement(By.xpath("//button[text()='Show password']")).click();
			driver.findElement(By.xpath("//input[@id='pass1-text']")).sendKeys(pswrd2);
			System.out.println("pass2 entered");
			
			Select s2=new Select(driver.findElement((By.name("role"))));
			s2.selectByVisibleText(rn2);
			System.out.println("Role2 selected");
			
			driver.findElement(By.xpath("//input[@id='createusersub']")).click();
			Thread.sleep(10000);
			System.out.println("Second user created");
			//System.out.println("New users added successfully and admin is on 'Users' page now");
			
		}	
		catch(Exception e)
		{
			System.out.println("Error :"+e);
			Assert.fail();
		}
	    
	}

	@When("^clicks on the checkboxes of required user records having username as \"([^\"]*)\" and \"([^\"]*)\"$")
	public void clicks_on_the_checkboxes_of_required_user_records_having_username_as_and(String un1, String un2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 try
		    {
		    	driver.findElement(By.xpath("//a[text()='"+un1+"']/../../../th/input")).click();
		    	System.out.println("Checkbox of "+un1+" is selected");
		    	Thread.sleep(5000);
		    	driver.findElement(By.xpath("//a[text()='"+un2+"']/../../../th/input")).click();
		    	System.out.println("Checkbox of "+un2+" is selected");
		   
		    }
		    catch(Exception e)
		    {
		    	System.out.println("Error :"+e);
		    	Assert.fail();
		    }
	}

	@When("^clicks on Change role to list and selects \"([^\"]*)\" option from the list$")
	public void clicks_on_Change_role_to_list_and_selects_option_from_the_list(String rolename) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	WebElement m1=driver.findElement(By.xpath("//*[@name='new_role']"));
	    	m1.click();
	    	Select obj=new Select(m1);
	    	obj.selectByVisibleText(rolename);
	    	System.out.println(rolename+" is selected from change role to... list");
	    	
	    	
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Error :"+e);
	    	Assert.fail();
	    }
	    
	}

	@When("^clicks on Change button$")
	public void clicks_on_Change_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   try
	   {
		   driver.findElement(By.xpath("//input[@name='changeit']")).click();
		   System.out.println("Clicked on Change button");
	   }
	   catch(Exception e)
	    {
	    	System.out.println("Error :"+e);
	    	Assert.fail();
	    }
	}

	@Then("^admin receives validation message of successful change in the role of selected user records$")
	public void admin_receives_validation_message_of_successful_change_in_the_role_of_selected_user_records() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	String ExpMsg="Changed roles.";  
	    	WebElement web1=driver.findElement(By.xpath("//p[contains(text(),'Changed')]"));
	    	String ActMsg=web1.getText();
	    	System.out.println("Actaul validation msg got after updating role: "+ActMsg);
	    	Assert.assertEquals(ExpMsg, ActMsg);
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Error :"+e);
	    	Assert.fail();
	    }
	}

	@Then("^confirms that the role of user records having \"([^\"]*)\", \"([^\"]*)\" are changed to \"([^\"]*)\"$")
	public void confirms_that_the_role_of_user_records_having_are_changed_to(String usern1, String usern2, String newr) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	WebElement r1 = driver.findElement(By.xpath("//a[text()='"+usern1+"']/following::td/following::td/following::td"));
	    	String actual=r1.getText();
	    	Assert.assertEquals(newr, actual);
	    	
	    	WebElement r2 = driver.findElement(By.xpath("//a[text()='"+usern2+"']/following::td/following::td/following::td"));
	    	String actual2=r2.getText();
	    	Assert.assertEquals(newr, actual2);
	    	
	    	System.out.println("Role of selected records are updated successfully");
	    	
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Error :"+e);
	    	Assert.fail();
	    }
	}

//******************************************************* Edit-View*******************************************************
		@Given("^admin is present on Users page$")
		public void admin_is_present_on_Users_page() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			try
			{
				System.out.println("Admin is on Users page and wants to verify edit and view options of admin record");
			}
			catch(Exception e)
		    {
		    	System.out.println("Error :"+e);
		    	Assert.fail();
		    }
		    
		}
		
		@When("^admin clicks on \"([^\"]*)\" option available below the username as \"([^\"]*)\"$")
		public void admin_clicks_on_option_available_below_the_username_as(String l1, String l2) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		   try
		   {
			 //a[text()='admin']/../../div/span/a[text()='Edit']
			   WebElement destiny=driver.findElement(By.xpath("//a[text()='"+l2+"']"));
			   Actions obj=new Actions(driver);
			   obj.moveToElement(destiny).build().perform();
			   System.out.println("Hovered on admin");
			   driver.findElement(By.xpath("//a[text()='"+l2+"']/../../div/span/a[text()='"+l1+"']")).click();
			   System.out.println("Clicked on Edit");
			   
		   }
		   catch(Exception e)
		    {
		    	System.out.println("Error :"+e);
		    	Assert.fail();
		    }
		}
		
		@Then("^admin navigates to Profile page in order to edit the details of admin$")
		public void admin_navigates_to_Profile_page_in_order_to_edit_the_details_of_admin() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	WebElement el=driver.findElement(By.xpath("//h1[text()='Profile']"));
		    	if(el.isDisplayed())
		    	{
		    		System.out.println("User is on Profile page to edit the details");
		    	}
		    	else
		    	{
		    		System.out.println("User is not on Profile page");
		    		Assert.fail();
		
		    	}
		    }
		    catch(Exception e)
		    {
		    	System.out.println("Error :"+e);
		    	Assert.fail();
		    }
		    
		}
		
		@Then("^changes the firstname and lastname to \"([^\"]*)\" and \"([^\"]*)\" respectively$")
		public void changes_the_firstname_and_lastname_to_and_respectively(String fn, String ln) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	
		    	WebElement e1=driver.findElement(By.name("first_name"));
		    	e1.clear();
		    	e1.sendKeys(fn);
		    	Thread.sleep(3000);
		    	
		    	WebElement e2=driver.findElement(By.name("last_name"));
		    	e2.clear();
		    	e2.sendKeys(ln);
		 
		    	System.out.println("first name and last name entered");
		    }
		    catch(Exception e)
		    {
		    	System.out.println("Error :"+e);
		    	Assert.fail();
		    }
		    
		}
		
		@Then("^clicks on Update Profile button$")
		public void clicks_on_Update_Profile_button() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	Thread.sleep(5000);
		    	driver.findElement(By.name("submit")).click();
		    	System.out.println("Clicked on Update profile button");
		    }
		    catch(Exception e)
		    {
		    	System.out.println("Error :"+e);
		    	Assert.fail();
		    }
		}
		
		@Then("^admin receives \"([^\"]*)\" on the same page after successfully updating the details$")
		public void admin_receives_on_the_same_page_after_successfully_updating_the_details(String vm) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	String expected="Profile updated.";
		    	WebElement e1=driver.findElement(By.xpath("//strong[text()='Profile updated.']"));
		    	String actual=e1.getText();
		    	System.out.println("Actual message got after updating admin record : "+actual);
		    	Assert.assertEquals(expected, actual);
		    	
		    }
		    catch(Exception e)
		    {
		    	System.out.println("Error :"+e);
		    	Assert.fail();
		    }
		}
		
		@When("^admin clicks on Users option from the main menu$")
		public void admin_clicks_on_Users_option_from_the_main_menu() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	driver.findElement(By.xpath("//div[text()='Users']")).click();
		    	System.out.println("Clicked on Users option from main menu");
		    }
		    catch(Exception e)
		    {
		    	System.out.println("Error :"+e);
		    	Assert.fail();
		    }
		}
		
		@Then("^Users page gets displayed$")
		public void users_page_gets_displayed() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions

			try
		    {
		    	String expect="Users ‹ Real Estate — WordPress";
		    	String actual = driver.getTitle();
		    	Assert.assertEquals(expect, actual);
		    	System.out.println("Users page gets displayed");
		    }
		    catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		}
		
		@Then("^admin clicks on \"([^\"]*)\" option available below the username \"([^\"]*)\"$")
		public void admin_clicks_on_option_available_below_the_username(String viewtext, String aun) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			try
			   {
				   WebElement destiny=driver.findElement(By.xpath("//a[text()='"+aun+"']"));
				   Actions obj=new Actions(driver);
				   obj.moveToElement(destiny).build().perform();
				   System.out.println("Hovered on admin");
				   driver.findElement(By.xpath("//a[text()='"+aun+"']/../../div/span/a[text()='"+viewtext+"']")).click();//a[text()='admin']/../../div/span/a[text()='View']
				   System.out.println("Clicked on View");
				   
			   }
			   catch(Exception e)
			    {
			    	System.out.println("Error :"+e);
			    	Assert.fail();
			    }
		}
		
		@Then("^admin navigates to his/her profile page and verifies firstname and lastname with updated values as \"([^\"]*)\" and \"([^\"]*)\"$")
		public void admin_navigates_to_his_her_profile_page_and_verifies_firstname_and_lastname_with_updated_values_as_and(String fn, String ln) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	boolean b=driver.findElement(By.xpath("//h2[text()='"+fn+" "+ln+"']")).isDisplayed();
		    	if(b)
		    	{
		    		System.out.println("Admin is on his/her profile page");
		    		WebElement e=driver.findElement(By.xpath("//h2[text()='"+fn+" "+ln+"']"));
		    		String ustr=e.getText();
		    		System.out.println("Updated firstname and lastname of admin : "+ustr);
		    		
		    	}
		    	else
		    	{
		    		System.out.println("Admin is not on his/her profile page");
		    		Assert.fail();
		    	}
		    }
		    catch(Exception e)
		    {
		    	System.out.println("Error :"+e);
		    	Assert.fail();
		    }
		}
		
		@Then("^clicks on \"([^\"]*)\" option of any specific available property$")
		public void clicks_on_option_of_any_specific_available_property(String dlink) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			try
			{
				List<WebElement> li=driver.findElements(By.xpath("//a[text()='"+dlink+"']"));
				for(int i=0;i<1;i++)
				{
					WebElement eobj=li.get(i);
					Thread.sleep(3000);
					eobj.click();
					System.out.println("Clicked on Details option");
				}
			}
			catch(Exception e)
		    {
		    	System.out.println("Error :"+e);
		    	Assert.fail();
		    }
		}
		
		@Then("^admin navigates to the page which is showing all the details of selected property$")
		public void admin_navigates_to_the_page_which_is_showing_all_the_details_of_selected_property() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	WebElement e=driver.findElement(By.xpath("//a[@class='back-to-listings']"));
		    	if(e.isDisplayed())
		    	{
		    		System.out.println("Admin is on the page which is showing details of selected property");
		    	}
		    	else
		    	{
		    		System.out.println("Admin is not on the page which is showing details of selected property");
		    		Assert.fail();
		    	}
		    }
		    catch(Exception e)
		    {
		    	System.out.println("Error :"+e);
		    	Assert.fail();
		    
		    }
}
	
		//******************************************** Edit-Delete-View *******************************************************
		
		
		@Given("^admin is on Users page in order to edit, view and delete any user record$")
		public void admin_is_on_Users_page_in_order_to_edit_view_and_delete_any_user_record() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    
		    	System.out.println("Admin is on Users page and wants to verify edit, delete and view options of a specific user record");
		    }
		    catch(Exception e)
		    {
		    	System.out.println("Error: "+e);
		    	Assert.fail();
		    }
		}

		@When("^admin creates a new user-record having \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\"$")
		public void admin_creates_a_new_user_record_having(String un, String email, String fn, String ln, String pass) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			try
			{
				//creating a user record
				driver.findElement(By.xpath("//a[@class='page-title-action']")).click();
				Thread.sleep(3000);
				System.out.println("Clicked on Add New button");
				
				driver.findElement(By.xpath("//input[@id='user_login']")).sendKeys(un);
				Thread.sleep(3000);
				driver.findElement(By.xpath("//input[@id='email']")).sendKeys(email);
				Thread.sleep(3000);
				System.out.println("Username and email entered");
				
				driver.findElement(By.name("first_name")).sendKeys(fn);
				Thread.sleep(3000);
				driver.findElement(By.name("last_name")).sendKeys(ln);
				Thread.sleep(3000);
				System.out.println("firstname and lastname entered");
				
				driver.findElement(By.xpath("//button[text()='Show password']")).click();
				Thread.sleep(3000);
				driver.findElement(By.xpath("//input[@id='pass1-text']")).sendKeys(pass);
				Thread.sleep(3000);
				System.out.println("password entered");
				
				
				driver.findElement(By.xpath("//input[@id='createusersub']")).click();
				Thread.sleep(5000);
				System.out.println("New user created");
			}
			 catch(Exception e)
		    {
		    	System.out.println("Error: "+e);
		    	Assert.fail();
		    }
		    
		}

		@When("^clicks on \"([^\"]*)\" which is available below the \"([^\"]*)\"$")
		public void clicks_on_which_is_available_below_the(String edit, String usern) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	   WebElement destiny=driver.findElement(By.xpath("//a[text()='"+usern+"']"));
				   Actions obj=new Actions(driver);
				   obj.moveToElement(destiny).build().perform();
				   System.out.println("Hovered on username "+usern);
				   driver.findElement(By.xpath("//a[text()='"+usern+"']/../../div/span/a[text()='"+edit+"']")).click();
				   System.out.println("Clicked on Edit");
		    }
		    catch(Exception e)
		    {
		    	System.out.println("Error: "+e);
		    	Assert.fail();
		    }
		}

		@Then("^admin is redirected to Edit User page for the purpose of editing the details$")
		public void admin_is_redirected_to_Edit_User_page_for_the_purpose_of_editing_the_details() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	boolean b=driver.findElement(By.xpath("//h1[contains(text(),'Edit User')]")).isDisplayed();
		    	if(b)
		    	{
		    		System.out.println("Admin is on Edit User page");
		    	}
		    	else
		    	{
		    		System.out.println("Admin is not on Edit User page");
		    		Assert.fail();
		    	}
		    }
		    catch(Exception e)
		    {
		    	System.out.println("Error: "+e);
		    	Assert.fail();
		    }
		}

		@Then("^changes the values of firstname, lastname and email with \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\" respectively and clicks on the Update User button$")
		public void changes_the_values_of_firstname_lastname_and_email_with_and_respectively_and_clicks_on_the_Update_User_button(String fn, String ln, String mail) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	WebElement e1=driver.findElement(By.name("first_name"));
		    	e1.clear();
		    	e1.sendKeys(fn);
		    	Thread.sleep(3000);
		    	
		    	WebElement e2=driver.findElement(By.name("last_name"));
		    	e2.clear();
		    	e2.sendKeys(ln);
		    	Thread.sleep(3000);
		    	
		    	WebElement e3=driver.findElement(By.name("email"));
		    	e3.clear();
		    	e3.sendKeys(mail);
		    	Thread.sleep(3000);
		    	System.out.println("first name, last name and email entered");
		    	
		    	driver.findElement(By.xpath("//input[@name='submit']")).click();
		    	Thread.sleep(5000);
		    	System.out.println("Clicked on Update User button");
		    }
		    catch(Exception e)
		    {
		    	System.out.println("Error: "+e);
		    	Assert.fail();
		    }
		}

		@Then("^after successful updation, admin receives \"([^\"]*)\"$")
		public void after_successful_updation_admin_receives(String vm) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	//strong[text()='User updated.']
		    	boolean b1=driver.findElement(By.xpath("//strong[text()='"+vm+"']")).isDisplayed();
		    	
		    	if(b1)
		    	{
		    		WebElement e=driver.findElement(By.xpath("//strong[text()='"+vm+"']"));
			    	String text=e.getText();
		    		System.out.println("Vadidation message received by admin after editing details : "+text);
		    	}
		    	else
		    	{
		    		System.out.println("Admin doesn't got any validation message after editing the details");
		    		Assert.fail();
		    	}
		    }
		    catch(Exception e)
		    {
		    	System.out.println("Error: "+e);
		    	Assert.fail();
		    }
		}

		@Then("^clicks on Back to Users link$")
		public void clicks_on_Back_to_Users_link() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	driver.findElement(By.xpath("//a[contains(text(),'Back to Users')]")).click();
		    	System.out.println("Clicked on Back to Users link");
		    	
		    }
		    catch(Exception e)
		    {
		    	System.out.println("Error: "+e);
		    	Assert.fail();
		    }
		}

		@Then("^admin is redirected to Users page$")
		public void admin_is_redirected_to_Users_page() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			try
		    {
				Thread.sleep(5000);
				String expected = "Users ‹ Real Estate — WordPress";
				String acmsg= driver.getTitle();
				System.out.println("Actaul title get : "+acmsg);
				Assert.assertEquals(expected, acmsg);
				System.out.println("Admin is on Users page");
		 
		    }
		    catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		}

		@When("^admin clicks on the option named as \"([^\"]*)\" which is available below the \"([^\"]*)\"$")
		public void admin_clicks_on_the_option_named_as_which_is_available_below_the(String v, String u) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			 try
			    {
			    	   WebElement d=driver.findElement(By.xpath("//a[text()='"+u+"']"));
					   Actions obj=new Actions(driver);
					   obj.moveToElement(d).build().perform();
					   Thread.sleep(3000);
					   System.out.println("Hovered on username "+u);
					   driver.findElement(By.xpath("//a[text()='"+u+"']/../../div/span/a[text()='"+v+"']")).click();
					   System.out.println("Clicked on View");
			    }
			    catch(Exception e)
			    {
			    	System.out.println("Error: "+e);
			    	Assert.fail();
			    }
		}

		@Then("^admin navigates to profile page and verifies firstname, lastname and email with modified values as \"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\" respectively$")
		public void admin_navigates_to_profile_page_and_verifies_firstname_lastname_and_email_with_modified_values_as_and_respectively(String fn, String ln, String email) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	Thread.sleep(3000);
		    	boolean b1=driver.findElement(By.xpath("//h2[text()='"+fn+" "+ln+"']")).isDisplayed();
		    	boolean b2=driver.findElement(By.xpath("//a[text()='"+email+"']")).isDisplayed();
		    	if(b1 && b2)
		    	{
		    		System.out.println("First name, Last name and email are updated successfully");
		    	}
		    	else
		    	{
		    		System.out.println("First name or Last name or email are not updated successfully");
		    		Assert.fail();
		    	}
		    	
		    }
		    catch(Exception e)
		    {
		    	System.out.println("Error: "+e);
		    	Assert.fail();
		    }
		}

		@Then("^clicks on Dashboard option from Real Estate list which is available on upper bar of the profile page$")
		public void clicks_on_Dashboard_option_from_Real_Estate_list_which_is_available_on_upper_bar_of_the_profile_page() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	
		    	
		    	   WebElement w1=driver.findElement(By.xpath("//a[@class='ab-item']/../following-sibling::li/following-sibling::li/following-sibling::li/following::li/a"));
				   Actions obj=new Actions(driver);
				   obj.moveToElement(w1).build().perform();
				   Thread.sleep(3000);
				   System.out.println("Hovered on Real Estate option");
				   driver.findElement(By.xpath("//a[@class='ab-item']/../following-sibling::li/following-sibling::li/following-sibling::li/following::li/div/ul/li/a[text()='Dashboard']")).click();
				   System.out.println("Clicked on Dashboard");
		    }
		    catch(Exception e)
		    {
		    	System.out.println("Error: "+e);
		    	Assert.fail();
		    }
		}

		@Then("^admin is redirected to Dashboard$")
		public void admin_is_redirected_to_Dashboard() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			try
		    {
		    	String expect="Dashboard ‹ Real Estate — WordPress";
		    	String actual = driver.getTitle();
		    	Assert.assertEquals(expect, actual);
		    	System.out.println("Admin is on dashboard");
		    }
		    catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		}

		@Then("^clicks on the option named as Users from the main menu$")
		public void clicks_on_the_option_named_as_Users_from_the_main_menu() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	driver.findElement(By.xpath("//div[text()='Users']")).click();
		    	System.out.println("admin clicks on Users");
		    }
		    catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		}

		@Then("^again Users page gets displayed$")
		public void again_Users_page_gets_displayed() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    	try
			    {
			    	String expect="Users ‹ Real Estate — WordPress";
			    	String actual = driver.getTitle();
			    	Assert.assertEquals(expect, actual);
			    	System.out.println("Users page gets displayed");
			    }
			    catch(Exception e)
				 {
					 System.out.println("Error :"+e);
					 Assert.fail();
				 }
		  
		}

		@When("^admin clicks on \"([^\"]*)\" option available below the \"([^\"]*)\"$")
		public void admin_clicks_on_option_available_below_the(String del, String un) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	   WebElement d=driver.findElement(By.xpath("//a[text()='"+un+"']"));
				   Actions obj=new Actions(driver);
				   obj.moveToElement(d).build().perform();
				   System.out.println("Hovered on username "+un);
				   driver.findElement(By.xpath("//a[text()='"+un+"']/../../div/span/a[text()='"+del+"']")).click();
				   System.out.println("Clicked on Delete");
		    	
		    }
		    catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		}

		@Then("^admin is redirected to Delete Users page$")
		public void admin_is_redirected_to_Delete_Users_page() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		   try
		   {
			   WebElement we=driver.findElement(By.xpath("//input[@id='submit']"));
		    	boolean b1=we.isDisplayed();
		    	if(b1)
		    	{
		    		System.out.println("Admin is on Delete Users page");
		    	}
		    	else
		    	{
		    		System.out.println("Admin is not on Delete Users page");
		    		Assert.fail();
		    	}   
		   }
		   catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		}

		
		@Then("^Confirm Deletion button is clicked by admin$")
		public void confirm_Deletion_button_is_clicked_by_admin() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			// Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	driver.findElement(By.xpath("//input[@id='submit']")).click();
		    	System.out.println("Clicked on confirm deletion button");
		    }
		    catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		}

		@Then("^admin is again redirected to Users page$")
		public void admin_is_again_redirected_to_Users_page() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			try
		    {
		    	String expect="Users ‹ Real Estate — WordPress";
		    	String actual = driver.getTitle();
		    	Assert.assertEquals(expect, actual);
		    	System.out.println("Admin is redirected to Users page");
		    	System.out.println();
		    }
		    catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		    
		}

		@Then("^receives \"([^\"]*)\" after successful deletion of required user record$")
		public void receives_after_successful_deletion_of_required_user_record(String dvm) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	boolean resb= driver.findElement(By.xpath("//p[text()='"+dvm+"']")).isDisplayed();
		    	if(resb)
		    	{
		    		System.out.println("Validation message received after deleting record: "+dvm);
		    	}
		    	else
		    	{
		    		System.out.println("There is no any validation message");
		    		Assert.fail();
		    	}
		    }
		    catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		}
		
	//********************************************* addnew1 ***********************************************************
		@Given("^admin is on Users page for the purpose of adding new user$")
		public void admin_is_on_Users_page_for_the_purpose_of_adding_new_user() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	String expect="Users ‹ Real Estate — WordPress";
		    	String actual = driver.getTitle();
		    	Assert.assertEquals(expect, actual);
		    	System.out.println("Admin is on Users page in order to add new user into real-estate application");
		    }
		    catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		}

		@When("^admin clicks on Add New option from the main menu$")
		public void admin_clicks_on_Add_New_option_from_the_main_menu() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	Thread.sleep(2000);
		    	driver.findElement(By.xpath("//a[text()='Add New']/../../../following-sibling::li[15]/ul/li[3]/a[text()='Add New']")).click();
		    	System.out.println("clicked on Add New option from main menu");
		    }
		    catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		    
		}

		@Then("^admin navigates to Add New User page$")
		public void admin_navigates_to_Add_New_User_page() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		 try
		 {
			 String exp="Add New User ‹ Real Estate — WordPress";
			 String act=driver.getTitle();
			 System.out.println("Actual title got : "+act);
			 Assert.assertEquals(exp,act);
			 System.out.println("Admin is on Add New User page");
		 }
		 catch(Exception e)
		 {
			 System.out.println("Error :"+e);
			 Assert.fail();
		 }
		}

		@Then("^enters \"([^\"]*)\" , \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\" in the respective input fields$")
		public void enters_in_the_respective_input_fields(String un, String email, String fn, String ln, String web, String pass) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	driver.findElement(By.name("user_login")).sendKeys(un);
		    	
		    	driver.findElement(By.name("email")).sendKeys(email);
		    	Thread.sleep(2000);
		    	if(fn.equals("null"))
	    		{
	    			fn="";
	    			driver.findElement(By.name("first_name")).sendKeys(fn);
	    			
	    		}
		    	else
		    	{
		    		driver.findElement(By.name("first_name")).sendKeys(fn);
		    	}
		    	Thread.sleep(2000);
		    	if(ln.equals("null"))
	    		{
	    			ln="";
	    			driver.findElement(By.name("last_name")).sendKeys(ln);
	    			
	    		}
		    	else
		    	{
		    		driver.findElement(By.name("last_name")).sendKeys(ln);
		    	}
		    
		    	driver.findElement(By.name("url")).sendKeys(web);
		    	Thread.sleep(5000);
		    	driver.findElement(By.xpath("//button[text()='Show password']")).click();
		    	Thread.sleep(2000);
		    	driver.findElement(By.name("pass1-text")).sendKeys(pass);
		    	
		    }
		    catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		}

		@Then("^selects \"([^\"]*)\" as check/uncheck for the checkbox of Send User Notification field and selects \"([^\"]*)\" from Role list$")
		public void selects_as_check_uncheck_for_the_checkbox_of_Send_User_Notification_field_and_selects_from_Role_list(String st, String role) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	if(st.equals("Check"))
		    	{
		    		System.out.println("Chechbox selected");
		    	}
		    	else
		    	{
		    		Thread.sleep(2000);
		    		driver.findElement(By.xpath("//input[@name='send_user_notification']")).click();
		    		System.out.println("Chechbox deselected");
		    	}
		    	
		    	Thread.sleep(5000);
		    	driver.findElement(By.xpath("//*[@name='role']")).click();
				Thread.sleep(3000);
				Select sobj2=new Select(driver.findElement((By.name("role"))));
				sobj2.selectByVisibleText(role);
				System.out.println("Role selected");
				Thread.sleep(3000);
		    	
		    }
		    catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		}

		@Then("^clicks on Add New User button after filling the form$")
		public void clicks_on_Add_New_User_button_after_filling_the_form() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	driver.findElement(By.xpath("//input[@id='createusersub']")).click();
				Thread.sleep(3000);
				System.out.println("clicked on Add new user button");
		    }
		    catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		}

		@Then("^admin goes to Users page$")
		public void admin_goes_to_Users_page() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			try
		    {
		    	String expect1="Users ‹ Real Estate — WordPress";
		    	String actual1= driver.getTitle();
		    	Thread.sleep(1000);
		    	Assert.assertEquals(expect1, actual1);
		    	System.out.println("Admin is on Users page after filling the form");
		    	Thread.sleep(3000);
		    }
		    catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		    
		}

		@Then("^receives \"([^\"]*)\" after successfully adding the new user having details as \"([^\"]*)\" , \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\"$")
		public void receives_after_successfully_adding_the_new_user_having_details_as(String vm, String user, String mail, String firstn, String lastn, String webn) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	boolean b=driver.findElement(By.xpath("//p[contains(text(),'"+vm+"')]")).isDisplayed();
		    	if(b)
		    	{
		    		if(mail.charAt(0)=='.')
		    		{
		    			System.out.println("Email should not contain leading dot in the username portion of the email id!");
		    			System.out.println("Entered email id is "+mail);
		    			System.out.println("But still user record is created !");
		    			Assert.fail();
		    		}
		    		else if(mail.contains(".@"))
		    		{
		    			System.out.println("Email should not contain trailing dot in the username portion of the email id!");
		    			System.out.println("Entered email id is "+mail);
		    			System.out.println("But still user record is created !");
		    			Assert.fail();
		    		}
		    		
		    		Pattern p=Pattern.compile("[!@#$%^&*()_++|?{}\\[\\]~-]");
		    		Matcher m=p.matcher(firstn);
		    		boolean bres=m.find();
		    		if(bres)
		    		{ 
		    			System.out.println("Entered firstname is "+firstn);
		    			System.out.println("But only special characters are not allowed in firstname and still user record is created");
		    			Assert.fail();
		    		}
		    		
		    		Pattern p1=Pattern.compile("[!@#$%^&*()_++|?{}\\[\\]~-]");
		    		Matcher m1=p1.matcher(lastn);
		    		boolean bres1=m1.find();
		    		if(bres1)
		    		{ 
		    			System.out.println("Entered lastname is "+lastn);
		    			System.out.println("But only special characters are not allowed in lastname and still user record is created");
		    			Assert.fail();
		    		}
		    		if(firstn.length()>50)
		    		{
		    			System.out.println("firstname should not accept more than 50 characters .");
		    			System.out.println("But still user record is created !");
		    			Assert.fail();
		    		}
		    		if(lastn.length()>50)
		    		{
		    			System.out.println("Lastname should not accept more than 50 characters .");
		    			System.out.println("But still user record is created !");
		    			Assert.fail();
		    		}
		    		boolean bresult=webn.contains(".");
		    		if(bresult)
		    		{
		    		}
		    		else
		    		{
		    			System.out.println("Entered website name is "+webn);
		    			System.out.println("Plaintext is not allowed in website field");
		    			System.out.println("But still user record is created !");
		    			Assert.fail();
		    		}
		    		System.out.println("User created having the following important details, ");
		    		System.out.println("Username: "+user);
		    		System.out.println("Email: "+mail);
		    		System.out.println("Firstname: "+firstn);
		    		System.out.println("Lastname: "+lastn);
		    		System.out.println("Website name: "+webn);
		    		
		    	}
		    	else
		    	{
		    		System.out.println("Validation message is not present");
		    	}
		    		
		    }
		    catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		   
		    
		}
		
		//******************************************************* addnew2 *************************************************************
		@Given("^admin is on Users page and wants to add new user$")
		public void admin_is_on_Users_page_and_wants_to_add_new_user() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	System.out.println("Admin is on Users page and wants to add new user");
		    }
		    catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		}

		@When("^admin clicks on Add New button$")
		public void admin_clicks_on_Add_New_button() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	driver.findElement(By.xpath("//a[@class='page-title-action']")).click();
				Thread.sleep(3000);
				System.out.println("Clicked on Add New button");
		    }
		    catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		}

		@Then("^admin is redirected to Add New User page$")
		public void admin_is_redirected_to_Add_New_User_page() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			try
			 {
				 String exp="Add New User ‹ Real Estate — WordPress";
				 String act=driver.getTitle();
				 System.out.println("Actual title got : "+act);
				 Assert.assertEquals(exp,act);
				 System.out.println("Admin is on Add New User page");
			 }
			 catch(Exception e)
			 {
				 System.out.println("Error :"+e);
				 Assert.fail();
			 }
		}

		@Then("^enters \"([^\"]*)\" , \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\"$")
		public void enters(String u, String e, String f, String l, String w, String p) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		   try
		   {
			   if(u.equals("null") && e.equals("null"))
			   {
				   u="";
				   e="";
				   driver.findElement(By.name("user_login")).sendKeys(u);
			    	
			    	driver.findElement(By.name("email")).sendKeys(e);
			    	Thread.sleep(2000);
			   }
			   else
			   {
			   driver.findElement(By.name("user_login")).sendKeys(u);
		    	
		    	driver.findElement(By.name("email")).sendKeys(e);
		    	Thread.sleep(2000);
			   }
		    	driver.findElement(By.name("first_name")).sendKeys(f);
				Thread.sleep(3000);
				driver.findElement(By.name("last_name")).sendKeys(l);
				Thread.sleep(3000);
				driver.findElement(By.name("url")).sendKeys(w);
				
				driver.findElement(By.xpath("//button[text()='Show password']")).click();
				Thread.sleep(3000);
				driver.findElement(By.xpath("//input[@id='pass1-text']")).sendKeys(p);
				Thread.sleep(3000);	
		   }
		   catch(Exception e1)
		   {
			   System.out.println("Error: "+e1);
		   }
		}

		@Then("^selects the \"([^\"]*)\" of checkbox of Send User Notification field as check/uncheck$")
		public void selects_the_of_checkbox_of_Send_User_Notification_field_as_check_uncheck(String status) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			try
			{
				if(status.equals("Check"))
		    	{
		    		System.out.println("Chechbox selected");
		    	}
		    	else
		    	{
		    		Thread.sleep(2000);
		    		driver.findElement(By.xpath("//input[@name='send_user_notification']")).click();
		    		System.out.println("Chechbox deselected");
		    	}
		    	
		    	Thread.sleep(5000);
			}
			catch(Exception e1)
			{
				   System.out.println("Error: "+e1);
			}
		}

		@Then("^selects \"([^\"]*)\" from the list$")
		public void selects_from_the_list(String rn) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {
		    	driver.findElement(By.xpath("//*[@name='role']")).click();
				Thread.sleep(3000);
				Select sobj2=new Select(driver.findElement((By.name("role"))));
				sobj2.selectByVisibleText(rn);
				System.out.println("Role selected");
				Thread.sleep(3000);
		    }
		    catch(Exception e)
			   {
				   System.out.println("Error: "+e);
			   }
		}

		@When("^admin clicks on Add new User button$")
		public void admin_clicks_on_Add_new_User_button() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    try
		    {

				driver.findElement(By.xpath("//input[@id='createusersub']")).click();
				Thread.sleep(5000);
				System.out.println("clicked on Add new user button");
		    }
		    catch(Exception e)
			{
				   System.out.println("Error: "+e);
			}
		}

		@Then("^admin receives \"([^\"]*)\" after entering the details of user whose username and email are \"([^\"]*)\" and \"([^\"]*)\" reprectively$")
		public void admin_receives_after_entering_the_details_of_user_whose_username_and_email_are_and_reprectively(String vm, String un, String mail) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    
			try
			{
				//for un containing all special characters
				Pattern p1=Pattern.compile("[!@#$%^&*()_++|?{}\\[\\]~-]");
	    		Matcher m1=p1.matcher(un);
	    		boolean bres1=m1.find();
	    		if(bres1)
	    		{ 
	    			
	    			System.out.println("Entered Username is "+un);
	    			WebElement we=driver.findElement(By.xpath("//p[contains(text(),'username is invalid')]"));
	    			boolean d=we.isDisplayed();
	    			if(d)
	    			{
	    				String str=we.getText();
	    				System.out.println("Validation message got after entering "+un+" is "+str);
	    			}
	    			else
	    			{
	    				System.out.println("Proper validation message is not displayed");
	    				Assert.fail();
	    			}
	    			
	    		}
	    		
	    		//for null un amd mail
	    		if(un.equals("null") && mail.equals("null") && vm.equals("becomes red"))
	    		{
	    			WebElement web1= driver.findElement(By.name("user_login"));
	    			String str=web1.getCssValue("border-color");
	    			String estr="rgb(220, 50, 50)";
	    			Assert.assertEquals(estr,str);
	    			System.out.println("Username field changed to red");
	    			Thread.sleep(2000);
	    			
	    			WebElement e2= driver.findElement(By.name("email"));
	    			String str1=e2.getCssValue("border-color");
	    			String estr1="rgb(220, 50, 50)";
	    			Assert.assertEquals(estr1,str1);
	    			System.out.println("email field changed to red");
	    			Thread.sleep(2000);
	    			
	    			System.out.println("Because username and email fields are kept empty !");
	    		}
	    	
	    		//email with missing @ and .
	    		if((!(mail.contains("@") && mail.contains("."))) && !(mail.equals("null")))
	    		{
	 
	    			WebElement we1=driver.findElement(By.xpath("//p[contains(text(),'email address isn’t correct')]"));
	    			boolean d1=we1.isDisplayed();
	    			if(d1)
	    			{
	    				String str1=we1.getText();
	    				System.out.println("Validation message got after entering "+mail+" is, "+str1);
	    				System.out.println("Because @ and  . signs are missing in entered email ID");
	    			}
	    			else
	    			{
	    				System.out.println("Proper validation message is not displayed");
	    				Assert.fail();
	    			}
	    		}
	    		
	    		//email starting with @
	    		if(mail.charAt(0)=='@')
	    		{
	    			WebElement we2=driver.findElement(By.xpath("//p[contains(text(),'email address isn’t correct')]"));
	    			boolean d2=we2.isDisplayed();
	    			if(d2)
	    			{
	    				String str2=we2.getText();
	    				System.out.println("Validation message got after entering "+mail+" is, "+str2);
	    				System.out.println("Because username portion is missing in entered email id");
	    			}
	    			else
	    			{
	    				System.out.println("Proper validation message is not displayed");
	    				Assert.fail();
	    			}
	    		}
	    		
	    		//email having multiple dots
	    		if(mail.contains(".."))
	    		{
	    			WebElement we3=driver.findElement(By.xpath("//p[contains(text(),'email address isn’t correct')]"));
	    			boolean d3=we3.isDisplayed();
	    			if(d3)
	    			{
	    				String str3=we3.getText();
	    				System.out.println("Validation message got after entering "+mail+" is, "+str3);
	    				System.out.println("Because entered email id is containing multiple dots" );
	    			}
	    			else
	    			{
	    				System.out.println("Proper validation message is not displayed");
	    				Assert.fail();
	    			}
	    			
	    		}
	    		
	    		
			}
			catch(Exception e)
			{
				   System.out.println("Error: "+e);
				   Assert.fail();
			}
		

		}
			
}