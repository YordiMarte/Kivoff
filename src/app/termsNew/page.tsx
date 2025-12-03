import NewComponent from "@/components/New/TermsNewInform";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function Page() {
    return (
        <>
            <Navbar />
            <NewComponent />
            <Footer />
        </>
    );
}