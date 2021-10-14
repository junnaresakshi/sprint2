package hooks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hook {
	public static WebDriver driver;
	@Before
	public void initialization()
	{
		System.setProperty("webdriver.chrome.driver", ".\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://realty-real-estatem1.upskills.in/");
	}
	@After
	public void closedriver()
	{
		
		driver.quit();
		System.out.println("Browser is closing now");
	}
}
//jgbkuhfgiuy87689y7590jsvjhbsjdgvugwyt5768767895jkdfnvkjdfsvuhte8uy78496509omskcmlaskfcpoeribvhjghue8r75t960ijtgnvmnbmhdhrjkgmVGHFUYGRHFJNSJKC6567798UHJFDNgdufhbvcnjmueriods56789fkdjhcnghdbcxmkjdfiueriteriosdknm64893hfdbchvhydg6758769ufhcjdhwRTYRYUWGUj8nhfu7