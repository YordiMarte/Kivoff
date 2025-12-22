import KivoffWrapped  from "@/components/Wrapped/KivoffWrapped";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function WrappedPage() {
    return (
        <>
            <Navbar />
            <KivoffWrapped />
            <Footer />
        </>
    );
}