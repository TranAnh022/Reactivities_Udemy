using System.Security.Claims;
using Application.Interfaces;
using Microsoft.AspNetCore.Http;

namespace Infrastructure.Security
{
    public class UserAccessor : IUserAccessor
    {
        private readonly IHttpContextAccessor _htppContextAccessor;
        //The main purpose of using the IHttpContextAccessor interface is to retrieve the user name from the token within the HTTP context
        //cause we're not inside the context of our API project
        public UserAccessor(IHttpContextAccessor htppContextAccessor)
        {
            _htppContextAccessor = htppContextAccessor;

        }
        public string GetUserName()
        {
            return _htppContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Name);
        }
    }
}