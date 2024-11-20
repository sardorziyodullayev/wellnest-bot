import { Announcement } from "@/shared/ui/announcement/announcement";
import { Layout } from "@/shared/ui/layout/layout";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

export const BaseLayout = () => {
  return (
    <Layout
      announcementSlot={
        <Announcement>
          <span>🚀&nbsp;&nbsp;An&nbsp;open source frontend application built with React and Feature-Sliced&nbsp;Design.</span>
        </Announcement>
      }
      sidebarSlot={<Sidebar />}
      headerSlot={<Header />}
    />
  );
};
