import { UserButton, useUser } from "@clerk/clerk-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const TopbarAdmin = () => {
  const [searchInput, setSearchInput] = useState("");
  const { user } = useUser();
  
  return (
    <div className="flex items-center justify-between gap-20">
      <Input
        placeholder="Search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <div className="flex items-center gap-4">
        <UserButton />
        {user && <p>{user.fullName || user.emailAddresses[0].emailAddress.split("@")[0]}</p>}
      </div>
    </div>
  );
};

export default TopbarAdmin;
