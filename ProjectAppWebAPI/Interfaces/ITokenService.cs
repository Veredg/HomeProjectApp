

namespace ProjectAppWebAPI.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(string UserId);
    }
}