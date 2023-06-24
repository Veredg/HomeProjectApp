using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using ProjectAppWebAPI.Interfaces;

namespace ProjectAppWebAPI.Services
{
    public class TokenService : ITokenService
    {
        private readonly SymmetricSecurityKey _key;
        public TokenService(IConfiguration config)
        {
            // Configure symmetric security key
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"]));
        }
        // Create JWT token
        public string CreateToken(string UserId)
        {
            // Define the claims for the token
            var claims = new List<Claim> {
                new Claim(JwtRegisteredClaimNames.NameId, UserId)
            };
            // Configure the token options
            var tokenOptions = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.UtcNow.AddHours(3), // Token expiration time
                signingCredentials: new SigningCredentials(_key,
                    SecurityAlgorithms.HmacSha256)
            );
            // Create the token
            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

            return tokenString;

        }
    }
}
