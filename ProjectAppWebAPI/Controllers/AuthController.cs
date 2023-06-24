
using Microsoft.AspNetCore.Mvc;
using ProjectAppWebAPI.Interfaces;

namespace ProjectAppWebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly ILogger<AuthController> _logger;

        private readonly ITokenService _tokenService;

        public AuthController(ILogger<AuthController> logger, ITokenService tokenService)
        {
            _logger = logger;
            _tokenService = tokenService;
        }

        [HttpGet("{userId}")]
        public IActionResult Login(string userId)
        {
            string token = _tokenService.CreateToken(userId);

            // Create a response message
            var response = new HttpResponseMessage();

            // Add the token as a response header
            response.Headers.Add("Authorization", $"Bearer {token}");

            // Return the response
            return Ok(new { token });
        }

    }
}