
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectAppWebAPI.Entities;

namespace ProjectAppWebAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class RepoController : ControllerBase
    {
        private readonly ILogger<RepoController> _logger;
        private readonly HttpClient _httpClient;

        public RepoController(ILogger<RepoController> logger, HttpClient httpClient)
        {
            _logger = logger;
            _httpClient = httpClient;
        }
        //create request using post verb to structure parameters into an object
        [HttpPost]
        public async Task<IActionResult> GetRepositories(SearchParams SearchParam)
        {
            try
            {
                // Set the base URL for the httpClient
                _httpClient.BaseAddress = new Uri("https://api.github.com/");

                // Set the required headers (GitHub API requires a user agent)
                _httpClient.DefaultRequestHeaders.Add("User-Agent", "MyApp");

                // Send the GET request to the endpoint
                HttpResponseMessage response = await _httpClient.GetAsync($"search/repositories?q={SearchParam.SearchText}");

                // Handle success
                if (response.IsSuccessStatusCode)
                {
                    var responseData = await response.Content.ReadAsStringAsync();

                    // Return a result
                    return Ok(responseData);
                }
                else
                {
                    // Handle errors
                    return BadRequest("Error occurred while calling Search API.");
                }
            }
            catch (HttpRequestException ex)
            {
                // Handle network failures or exceptions
                return StatusCode(500, "An error occurred while calling Search API: " + ex.Message);
            }
        }

    }
}