package hooks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hook {
	public static WebDriver driver;
	@Before
	public void initialization() throws InterruptedException
	{
		System.setProperty("webdriver.chrome.driver", ".\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		Thread.sleep(1000);
		driver.get("http://realty-real-estatem1.upskills.in/");
		Thread.sleep(2000);
	}
	@After
	public void closedriver()
	{
		
		driver.quit();
		System.out.println("Browser is closing now");
	}
}
