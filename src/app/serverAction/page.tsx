import { getServerSession } from "next-auth";
import WhoAmIButton from "./WhoAmIButton";

export default async function ServerActionPage() {
  const whoAMI = async () => {
    "use server";
    const session = await getServerSession();
    return session?.user?.name || "Not Signed In";
  };
  return (
    <div>
      <WhoAmIButton whoAmIAction={whoAMI} />
    </div>
  );
}
