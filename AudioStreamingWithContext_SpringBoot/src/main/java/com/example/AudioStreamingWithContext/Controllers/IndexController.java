package com.example.AudioStreamingWithContext.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {

	@GetMapping("/index")
	public String index() {
		return "Greetings from Audio Streaming with Context!";
	}
	
	@GetMapping("/")
	public String defaultPage() {
		return "Greetings Norayr, Astghik, Liana, Nina , Tatev, Shavarsh, Anna from Audio Streaming with Context";
	}
	
	
}

