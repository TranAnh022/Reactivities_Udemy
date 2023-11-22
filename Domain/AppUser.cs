using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {
        public string DisName { get; set; }
        public string Bio { get; set; }
    }
}